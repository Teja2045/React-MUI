import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  return (
    <Box width="250px">
      <TextField
        fullWidth
        label="Select Country"
        value={countries}
        select
        size="small"
        color="secondary"
        helperText="please select your country"
        error
        SelectProps={{
            multiple: true
        }}
        onChange={(e) => setCountries([...e.target.value])}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="ENG">England</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
