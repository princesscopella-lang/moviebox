import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectEst() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: { xs: 140, sm: 150, md: 300 } }}>
      <InputLabel id="demo-select-small-label">Tous les genres</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        sx={{
          borderRadius: 3,
          "& .MuiInputBase-input": {
            fontSize: 16,
            padding: "12px 26px 12px 12px",
            // Use the system font instead of the default Roboto font.
          },
        }}
        label="Tous les genres"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Action</MenuItem>
        <MenuItem value={20}>Animation</MenuItem>
        <MenuItem value={30}>Science-fiction</MenuItem>
      </Select>
    </FormControl>
  );
}
