import { getFoodRecomendationFirst } from "@/apis/openai-api"
import { storeDocDailyFoodRecomendations, storeDocUser } from "@/juno/storeDoc"
import { User } from "@/types"
import { signIn } from '@junobuild/core-peer'

export const submit = async (user: User) => {
  await signIn();
  await storeDocUser(user);
  const dailyFoodRecomendation = await getFoodRecomendationFirst(user);

  await storeDocDailyFoodRecomendations(dailyFoodRecomendation);
};
