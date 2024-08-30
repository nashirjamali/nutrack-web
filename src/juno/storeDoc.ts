import { DailyFood, Nutrition, User } from '@/types';
import { setDoc, type User as AuthUser } from '@junobuild/core-peer';
import { getDailyFoodRecomendation } from './getDoc';

export const storeDocUser = async (user: User) => {
  await setDoc({
    collection: 'user-data',
    doc: {
      key: `user-data-${new Date().getTime()}`,
      data: user
    }
  });
};

export const storeDocNutrition = async (nutrition: Nutrition) => {
  await setDoc({
    collection: 'nutritions',
    doc: {
      key: `nutrition-${new Date().getTime()}`,
      data: nutrition
    }
  });
};

export const storeDocDailyFoodRecomendations = async (dailyFood: DailyFood) => {
  await setDoc({
    collection: 'daily-food-recomendations',
    doc: {
      key: `daily-food-recomendations-${new Date().getTime()}`,
      data: dailyFood
    }
  });
};

export const updateDocDailyFoodRecomendations = async (
  dailyFood: DailyFood,
  user: AuthUser
) => {
  const prevData = await getDailyFoodRecomendation(user);

  await setDoc({
    collection: 'daily-food-recomendations',
    doc: {
      ...prevData.items[0],
      data: dailyFood
    }
  });
};
