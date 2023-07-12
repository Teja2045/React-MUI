import {
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { FormControl } from "@mui/base";

const MuiCheckBox = () => {
  const [skills, setSkills] = useState([]);
  console.log("skills", skills);
  const handleSkillsChange = (e) => {
    const selectedSkill = e.target.value;
    if (skills.includes(selectedSkill)) {
      setSkills(skills.filter((skill) => skill !== selectedSkill));
    } else {
        setSkills([...skills, selectedSkill])
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I access terms and conditions"
          control={<Checkbox />}
        ></FormControlLabel>
      </Box>
      <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup va>
            <FormControlLabel
              label="Java"
              control={
                <Checkbox
                  value="Java"
                  checked={skills.includes("Java")}
                  onChange={handleSkillsChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="Golang"
              control={
                <Checkbox
                  value="Golang"
                  checked={skills.includes("Golang")}
                  onChange={handleSkillsChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
                  onChange={handleSkillsChange}
                  value="Javascript"
                  checked={skills.includes("Javascript")}
                />
              }
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
