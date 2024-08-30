import { getDocUser } from '@/juno/getDoc';
import { storeDocDailyFoodRecomendations } from '@/juno/storeDoc';
import { DailyFood, User } from '@/types';
import { type User as AuthUser } from '@junobuild/core';
import OpenAI from 'openai';

export async function getNutritionalInfo(dailyFood: DailyFood) {
  const openAI = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const breakfastMenus: string[] = dailyFood.breakfast.menu.map(
    menu => menu.name
  );
  const lunchMenus: string[] = dailyFood.lunch.menu.map(menu => menu.name);
  const dinnerMenus: string[] = dailyFood.dinner.menu.map(menu => menu.name);

  const foodMenus = [
    `Sarapan: ${breakfastMenus.join(', ')}`,
    `Makan Siang: ${lunchMenus.join(', ')}`,
    `Makan Malam: ${dinnerMenus.join(', ')}`
  ];

  if (dailyFood.snack) {
    const snackMenus: string[] = dailyFood.snack.menu.map(menu => menu.name);
    foodMenus.push(`Camilan: ${snackMenus.join(', ')}`);
  }

  const prompt: string = `
  Hitung jumlah nutrisi yang telah terpenuhi pada makanan berikut:
  ${foodMenus.join('\n')}
  Berikan hasil dalam format JSON.
  `;

  const openAIResponse = await openAI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1000,
    temperature: 0.5
  });

  console.log(openAIResponse.choices[0].message.content?.trim());
}

export const getFoodRecomendationFirst = async (
  user: User
): Promise<DailyFood> => {
  const openAI = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  let jsonFormatExample = `
    {
      "data": {
        "breakfast": {
          "menus": [
            { "name": "Nama Menu", "qty": 10, "measurement": "Gram" },
          ],
          "price_estimation": 100000
        },
        "lunch": {
          "menus": [
            { "name": "Nama Menu", "qty": 10, "measurement": "Gram" },
          ],
          "price_estimation": 100000
        },
        "dinner": {
          "menus": [
            { "name": "Nama Menu", "qty": 10, "measurement": "Gram" },
          ],
          "price_estimation": 100000
        },
        "snack": {
          "menus": [
            { "name": "Nama Menu", "qty": 10, "measurement": "Gram" },
          ],
          "price_estimation": 100000
        }
      }
    }
  `;

  let prompt = `
    Profil ibu hamil: 

    Tanggal lahir: ${user.birthDate} 
    Usia kehamilan: ${user.gestationalAge} 
    Berat badan: ${user.weight}  
    Tinggi badan: ${user.height}  
    Riwayat penyakit: ${user.medicalHistory}  
    Lokasi tempat tinggal: ${user.address} 
    Biaya makan harian: ${user.dailyBudget} rupiah


    Berikan rekomendasi makanan indonesia dan mudah di akses untuk besok agar bayi dalam kandungan tidak mengalami stunting dengan format JSON seperti ini: 

    ${jsonFormatExample}
  `;

  const openAIResponse = await openAI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1000,
    temperature: 0.5
  });

  const dailyFood = JSON.parse(
    openAIResponse.choices[0].message.content ?? ''
  ) as unknown as DailyFood;

  return dailyFood;
};
