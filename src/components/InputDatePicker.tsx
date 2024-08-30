import React, { useState } from "react";
import "react-day-picker/style.css";
import { InputDatePickerProps } from "./types/input-date-picker-props";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

export default function InputDatePicker(
  props: InputDatePickerProps
): React.ReactElement {
  const { className, label, value, onChange } = props;

  const [openPopover, setOpenPopover] = useState<boolean>(false);

  function inputChangeHandler(value: DateValueType) {
    setOpenPopover(false);
    onChange(value);
  }

  return (
    <div className={`border border-gray-300 rounded-lg ${className}`}>
      <Datepicker
        asSingle
        useRange={false}
        placeholder={label}
        value={value}
        onChange={(newValue) => inputChangeHandler(newValue)}
      />
    </div>
  );
}
