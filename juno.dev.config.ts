import { defineDevConfig } from "@junobuild/config";

export default defineDevConfig(() => ({
  satellite: {
    collections: {
      db: [],
      datastore: [
        {
          collection: "nutritions",
          read: "public" as const,
          write: "public" as const,
          memory: "stable" as const,
          mutablePermissions: true,
        },
        {
          collection: "user-data",
          read: "public" as const,
          write: "public" as const,
          memory: "stable" as const,
          mutablePermissions: true,
        },
        {
          collection: "daily-food-recomendations",
          read: "public" as const,
          write: "public" as const,
          memory: "stable" as const,
          mutablePermissions: true,
        },
      ],
      storage: [],
    },
  },
}));
