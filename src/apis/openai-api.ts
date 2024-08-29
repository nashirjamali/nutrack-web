import { DailyFood } from "@/types";
import OpenAI from "openai";

export async function getNutritionalInfo(dailyFood: DailyFood) {
  const openAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const breakfastMenus: string[] = dailyFood.breakfast.menu.map(
    (menu) => menu.name
  );
  const lunchMenus: string[] = dailyFood.lunch.menu.map((menu) => menu.name);
  const dinnerMenus: string[] = dailyFood.dinner.menu.map((menu) => menu.name);

  const foodMenus = [
    `Sarapan: ${breakfastMenus.join(", ")}`,
    `Makan Siang: ${lunchMenus.join(", ")}`,
    `Makan Malam: ${dinnerMenus.join(", ")}`,
  ];

  if (dailyFood.snack) {
    const snackMenus: string[] = dailyFood.snack.menu.map((menu) => menu.name);
    foodMenus.push(`Camilan: ${snackMenus.join(", ")}`);
  }

  const prompt: string = `
  Hitung jumlah nutrisi yang telah terpenuhi pada makanan berikut:
  ${foodMenus.join("\n")}
  Berikan hasil dalam format JSON.
  `;

  const openAIResponse = await openAI.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 1000,
    temperature: 0.5,
  });

  console.log(openAIResponse.choices[0].message.content?.trim());
}
