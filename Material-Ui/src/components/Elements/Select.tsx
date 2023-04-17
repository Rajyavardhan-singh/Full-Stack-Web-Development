import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

function Select() {
  const [countryValue, setCouVal] = useState<string>("");

  function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    setCouVal(event.target.value);
    console.log(event.target.value)
  }

  return (
    <Box width="250px">
      <TextField
        label="Country"
        select
        fullWidth
        value={countryValue}
        onChange={handleSelect}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default Select;
