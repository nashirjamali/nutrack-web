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
): Promise<ListResults<Doc<Nutrition>>> => {
  const data = await listDocs<Nutrition>({
    collection: 'nutritions',
    filter: {
      owner: user.owner
    }
  });

  return data;
};

export const getDailyFoodRecomendation = async (
  user: AuthUser
): Promise<ListResults<Doc<DailyFood>>> => {
  const data = await listDocs<DailyFood>({
    collection: 'nutritions',
    filter: {
      owner: user.owner
    }
  });

  return data;
};
