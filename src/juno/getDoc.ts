import { DailyFood, Nutrition, User } from '@/types';
import { ListResults } from '@junobuild/core';
import { Doc, listDocs, type User as AuthUser } from '@junobuild/core-peer';

export const getDocUser = async (
  user: AuthUser
): Promise<ListResults<Doc<User>>> => {
  const data = await listDocs<User>({
    collection: 'user-data',
    filter: {
      owner: user.owner
    }
  });

  return data;
};

export const getDocNutrition = async (
  user: AuthUser
): Promise<
  ListResults<
    Doc<{
      data: Nutrition;
    }>
  >
> => {
  const data = await listDocs<{
    data: Nutrition;
  }>({
    collection: 'nutritions',
    filter: {
      owner: user.owner
    }
  });

  return data;
};

export const getDailyFoodRecomendation = async (
  user: AuthUser
): Promise<
  ListResults<
    Doc<{
      data: DailyFood;
    }>
  >
> => {
  const data = await listDocs<{
    data: DailyFood;
  }>({
    collection: 'daily-food-recomendations',
    filter: {
      owner: user.owner
    }
  });

  return data;
};
