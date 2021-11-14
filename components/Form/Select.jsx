import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants({ menuitems = [], value, onChange }) {
  return (
    <div>
      <FormControl variant="standard" className="w-full" sx={{ minWidth: 120 }}>
        <Select
          value={value}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e) => onChange(e)}
          label="Age"
        >
          {menuitems.map((menuItem, menuItemIndex) => (
            <MenuItem value={menuItem.value} key={menuItemIndex}>
              {menuItem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
