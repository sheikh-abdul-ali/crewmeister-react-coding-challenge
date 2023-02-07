import { Key } from "react";

import { MenuItem as MUIMenuItem, Select as MUISelect } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const Select = ({ menuItems, label, selectedValue, handleChange }) => {
	return (
		<FormControl sx={{ m: 1, width: 220 }}>
			<InputLabel shrink>{label}</InputLabel>
			<MUISelect value={selectedValue} displayEmpty label={label} onChange={handleChange}>
				<MUIMenuItem value="">{"All"}</MUIMenuItem>
				{menuItems.map((menuItem: string, index: Key) => (
					<MUIMenuItem key={index} value={menuItem}>
						{menuItem}
					</MUIMenuItem>
				))}
			</MUISelect>
		</FormControl>
	);
};

export default Select;
