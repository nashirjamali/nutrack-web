import { getReportNutrition } from '@/apis/openai-api';
import {
  getDailyFoodRecomendation,
  getDocNutrition,
  getDocUser
} from '@/juno/getDoc';
import { DailyFood, Report } from '@/types';
import { Doc, type User as AuthUser } from '@junobuild/core-peer';

export const getDailyFood = async (user: AuthUser): Promise<DailyFood> => {
  const dailyFood = await getDailyFoodRecomendation(user);

  return dailyFood.items[0].data.data;
};

export const getReport = async (user: AuthUser): Promise<Report[]> => {
  const nutrition = await getDocNutrition(user);
  const userData = await getDocUser(user);

  const report = await getReportNutrition(
    userData.items[0].data,
    nutrition.items[0].data.data
  );

  return report.data;
};
