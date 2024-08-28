export type User = {
  name: string;
  birthDate: string;
  gestationalAge: string;
  height: number;
  weight: number;
  medicalHistory: string;
  address: string;
  dailyBudget: string;
};

export type Menu = {
  name: string;
  qty: number;
  measurement: string;
};

export interface Food {
  name: string;
  menu: Menu[];
  priceEstimation: number;
}

export interface Score {
  name: string;
  quality: string;
}
