export type User = {
  name: string;
  birthDate: number;
  gestationalAge: number;
  height: number;
  weight: number;
  medicalHistory: string;
  address: string;
  dailyBudget: number;
};

export type Menu = {
  name: string;
  qty: number;
  measurement: string;
};

export type DailyFood = {
  breakfast: {
    menus: Menu[];
    price_estimation: number;
  };
  lunch: {
    menus: Menu[];
    price_estimation: number;
  };
  dinner: {
    menus: Menu[];
    price_estimation: number;
  };
  snack?: {
    menus: Menu[];
    price_estimation: number;
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

export type DailyInput = {
  breakfast: string;
  lunch: string;
  dinner: string;
  snack?: string;
};


export type Report = {
  name: string;
  status: string;
};
