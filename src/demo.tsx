import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Datepicker from "./datepicker";
import { Button, TextField, Typography } from "@mui/material";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function BasicSelect() {
  const [type, setType] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [completed, setCompleted] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  const handleSubjectChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCompleted(event.target.value as string);
  };

  React.useEffect(() => {
    console.log("Completed", completed);
    console.log("Type", type);
  });

  return (
    <Box sx={{ minWidth: 120, m: "1rem" }}>
      <Typography variant="h5" sx={{ m: "2rem 0 0" }}>
        User Data
      </Typography>
      <FormControl margin="normal" fullWidth>
        <InputLabel id="Type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={type}
          label="status"
          onChange={handleTypeChange}
        >
          <MenuItem value={1}>Type 1</MenuItem>
          <MenuItem value={2}>Type 2</MenuItem>
          <MenuItem value={3}>Type 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl margin="normal" fullWidth sx={{ mt: "0" }}>
        <InputLabel id="status">Subject</InputLabel>
        <Select
          labelId="status"
          id="status"
          value={subject}
          label="status"
          onChange={handleSubjectChange}
        >
          <MenuItem value={1}>Subject 1</MenuItem>
          <MenuItem value={2}>Subject 1</MenuItem>
          <MenuItem value={3}>Subject 1</MenuItem>
        </Select>
      </FormControl>

      <TextField
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="Text input"
        variant="outlined"
      />

      <Datepicker />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeClock
          sx={{ ml: "auto" }}
          minutesStep={30}
          value={duration}
          onChange={(newValue: React.SetStateAction<string>) =>
            setDuration(newValue)
          }
        />

        <TimePicker
          sx={{ display: "block" }}
          label="Controlled picker"
          value={duration}
          onChange={(newValue) => setDuration(newValue)}
        />
      </LocalizationProvider>

      <Button style={{ marginTop: ".5rem" }} variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
