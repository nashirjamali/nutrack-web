import { Nutrition, User } from '@/types';
import { setDoc } from '@junobuild/core-peer';

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
    collection: 'nutrition',
    doc: {
      key: `nutrition-${new Date().getTime()}`,
      data: nutrition
    }
  });
};
