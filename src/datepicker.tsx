import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

export default function Datepicker() {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  React.useEffect(() => {
    console.log("value", value);
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Start date"
        sx={{ width: "100%", mt: ".5rem" }}
        onChange={(newValue: Dayjs) => {
          console.log("nv", newValue);
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
