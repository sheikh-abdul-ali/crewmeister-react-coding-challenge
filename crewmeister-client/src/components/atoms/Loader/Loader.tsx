import { CircularProgress, CircularProgressProps } from "@mui/material";

const Loader = (props: JSX.IntrinsicAttributes & CircularProgressProps) => {
	return (
		<CircularProgress
			size={72}
			sx={{
				position: "absolute",
				top: "50%",
				left: "50%",
				marginTop: "-12px",
				marginLeft: "-12px"
			}}
			{...props}
		/>
	);
};

export default Loader;
