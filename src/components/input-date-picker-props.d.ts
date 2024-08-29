import { InputProps } from "@material-tailwind/react";

export interface InputDatePickerProps extends InputProps {
  value?: Date;
  onChange?: (value?: Date) => void;
}
