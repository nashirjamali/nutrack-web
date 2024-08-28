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

export type DailyFood = {
  breakfast: {
    name: string;
    menu: Menu[];
    priceEstimation: number;
  };
  lunch: {
    name: string;
    menu: Menu[];
    priceEstimation: number;
  };
  dinner: {
    name: string;
    menu: Menu[];
    priceEstimation: number;
  };
  snack?: {
    name: string;
    menu: Menu[];
    priceEstimation: number;
  };
};

export type Score = {
  name: string;
  quality: string;
};
