import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadio = () => {
    const [age, setAge] = useState("")
  return (
    <Box>
      <FormControl id="job-experience-group-label">
        <FormLabel>Years of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience-group-label"
          value={age}
          row
          onChange={(e) => setAge(e.target.value)}
        >
          <FormControlLabel control={<Radio size="small" />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio size="large" />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio color="secondary"/>} label="6-7" value="6-7" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
