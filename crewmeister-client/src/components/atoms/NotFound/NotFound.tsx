import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
	return (
		<Box
			sx={{
				position: "absolute",
				top: "50%",
				left: "45%",
				marginTop: "-12px"
			}}
			display="flex"
			gap={1}
		>
			<SearchIcon />
			<Typography color="primary">No records found!</Typography>
		</Box>
	);
};

export default NotFound;
