import { ChangeEvent } from "react";

import { TextField } from "@mui/material";

interface DatePickerProps {
	label: string;
	changeHandler: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

function DatePicker({ label, changeHandler, ...inputProps }: DatePickerProps) {
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
