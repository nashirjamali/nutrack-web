import { InputProps } from "@material-tailwind/react";
import { DateValueType } from "react-tailwindcss-datepicker";

export interface InputDatePickerProps extends InputProps {
  value: DateValueType;
  onChange: (value: DateValueType) => void;
}
