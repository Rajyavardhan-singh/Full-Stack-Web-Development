import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Box,
} from "@mui/material";
import { useState } from "react";
export const RadioButton = () => {
  const [value, setValue] = useState<String>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [gender, setGender] = useState<String>("");
  const handleGChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years Of Experience
        </FormLabel>
        <RadioGroup
          onChange={handleChange}
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="2-6" value="2-6" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <div>selected value is : {value}</div>
        <FormLabel id="gender-group-label">Select Gender</FormLabel>
        <RadioGroup value={gender} onChange={handleGChange} name="gender-group" aria-labelledby="gender-group-label">
          <FormControlLabel control={<Radio />} label="Male" value="Male" />
          <FormControlLabel control={<Radio />} label="Female" value="Female" />
        </RadioGroup>
        <div>selected value is : {gender}</div>
      </FormControl>
    </Box>
  );
};
