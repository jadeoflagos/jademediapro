import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";

export default function TimePickerComponent() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      className="border-transparent"
    >
      <DesktopTimePicker
        label="Select Time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
export function MobileTimePickerComponent() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      className="border-transparent"
    >
      <MobileTimePicker
        label="Select Time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      ;
    </LocalizationProvider>
  );
}
