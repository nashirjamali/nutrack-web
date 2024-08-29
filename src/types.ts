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
    menu: Menu[];
    priceEstimation: number;
  };
  lunch: {
    menu: Menu[];
    priceEstimation: number;
  };
  dinner: {
    menu: Menu[];
    priceEstimation: number;
  };
  snack?: {
    menu: Menu[];
    priceEstimation: number;
  };
};

export type Score = {
  name: string;
  quality: string;
};

export type Nutrition = {
  name: string;
  quantity: number;
};