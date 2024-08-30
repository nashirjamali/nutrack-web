import { getDocUser } from '@/juno/getDoc';
import { storeDocDailyFoodRecomendations } from '@/juno/storeDoc';
import { DailyFood, DailyInput, Nutrition, Report, User } from '@/types';
import { type User as AuthUser } from '@junobuild/core';
import OpenAI from 'openai';

export async function getNutritionalInfo(
  dailyFood: DailyInput,
  prevNutrition?: Nutrition
) {
  const openAI = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  let jsonFormatExample = `
  {
    "data": [
      {
        "name": "Nama Kandungan Nutrisi",
        "quantity": number
      }  
    ]
  }
  `;

  const foodMenus = [
    `Sarapan: ${dailyFood.breakfast}`,
    `Makan Siang: ${dailyFood.lunch}`,
    `Makan Malam: ${dailyFood.dinner}`,
    `Camilan: ${dailyFood.snack}`
  ];

  const prompt: string = `
  Hitung jumlah nutrisi yang telah terpenuhi pada makanan berikut:
  ${foodMenus.join('\n')}
  dan kombinasikan dengan nutrisi ini:
  ${prevNutrition}
  Berikan hasil dalam format JSON dengan format:
  ${jsonFormatExample}
  `;

  const openAIResponse = await openAI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1000,
    temperature: 0.5
  });

  const nutrition = JSON.parse(
    openAIResponse.choices[0].message.content ?? ''
  ) as unknown as Nutrition;

  return nutrition;
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

export const getFoodRecomendation = async (
  user: User,
  nutrition: Nutrition
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


    Jumlah nutrisi yang telah terpenuhi:
    ${nutrition} 

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

export const getReportNutrition = async (
  user: User,
  nutrition: Nutrition
): Promise<{
  data: Report[];
}> => {
  const openAI = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  let jsonFormatExample = `
    {
      "data": [
        {
          name: "nama nutrisi",
          status: "Kurang atau Berlebihan atau Baik"
        }
      ]
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

    Nutrisi terpenuhi:

    ${nutrition}

    Berikan hasil kandungan nutrisi pada ibu hamil agar bayi dalam kandungan tidak mengalami stunting dengan format JSON seperti ini: 

    ${jsonFormatExample}
  `;

  const openAIResponse = await openAI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1000,
    temperature: 0.5
  });

  const report = JSON.parse(
    openAIResponse.choices[0].message.content ?? ''
  ) as unknown as {
    data: Report[];
  };

  return report;
};
