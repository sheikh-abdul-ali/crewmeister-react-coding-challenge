import * as React from "react";

import { TextField } from "@mui/material";

function DatePicker({ label, changeHandler, ...inputProps }) {
	return (
		<TextField
			label={label}
			type="date"
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
