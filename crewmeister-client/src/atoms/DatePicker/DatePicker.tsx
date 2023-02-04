import * as React from "react";

import { TextField } from "@mui/material";

function DatePicker({ label, changeHandler, ...inputProps }) {
	return (
		<TextField
			// id={id}
			label={label}
			type="date"
			// value={value}
			sx={{ m: 1, width: 220 }}
			InputLabelProps={{
				shrink: true
			}}
			onChange={changeHandler}
			inputProps={{ ...inputProps }}
		/>
	);
}

export default DatePicker;
