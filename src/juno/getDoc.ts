import { Nutrition, User } from '@/types';
import { ListResults } from '@junobuild/core';
import { Doc, listDocs, type User as AuthUser } from '@junobuild/core-peer';

export const storeDocUser = async (
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

export const storeDocNutrition = async (
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
