import {
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { InputDatePickerProps } from "./input-date-picker-props";

export default function InputDatePicker(
  props: InputDatePickerProps
): React.ReactElement {
  const { className, label, value, onChange } = props;

  const [openPopover, setOpenPopover] = useState<boolean>(false);

  function inputChangeHandler(value: Date | undefined) {
    setOpenPopover(false);
    onChange && onChange(value);
  }

  return (
    <div className={`${className}`} onClick={() => setOpenPopover(true)}>
      <Popover placement="bottom" open={openPopover}>
        <PopoverHandler>
          <Input
            label={label}
            onChange={() => {}}
            value={value ? format(value, "dd-MM-yyyy") : ""}
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={value}
            onSelect={inputChangeHandler}
            showOutsideDays
            className="border-0"
            footer={
              value ? `Selected: ${format(value, "dd-MM-yyyy")}` : "Pilih hari."
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
