import { getFoodRecomendation, getNutritionalInfo } from '@/apis/openai-api';
import {
  getDailyFoodRecomendation,
  getDocNutrition,
  getDocUser
} from '@/juno/getDoc';
import {
  storeDocNutrition,
  updateDocDailyFoodRecomendations
} from '@/juno/storeDoc';
import { DailyInput, User } from '@/types';
import { type User as AuthUser } from '@junobuild/core-peer';

export const submit = async (data: DailyInput, user: AuthUser) => {
  const oldNutrition = await getDocNutrition(user);

  const nutrition = await getNutritionalInfo(
    data,
    oldNutrition.items.length > 0 ? oldNutrition.items[0].data.data : undefined
  );


  await storeDocNutrition(nutrition);
  const newNutrition = await getDocNutrition(user);

  const userData = await getDocUser(user);

  const dailyFood = await getFoodRecomendation(
    userData.items[0].data,
    newNutrition.items[0].data.data
  );

  await updateDocDailyFoodRecomendations(dailyFood, user);
};
