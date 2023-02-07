import { Box, Button, Typography } from "@mui/material";
import { Header } from "components";
import { FallbackProps } from "react-error-boundary";

const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<>
			<Header />
			<Box display="flex" height="90vh" alignItems="center" justifyContent="center">
				<Box role="alert" display="flex" gap={2} flexDirection="column">
					<Typography align="center" color="error">
						Failed to load absences.
					</Typography>
					<Typography align="center">
						We are investigating this issue on our side. For further support you can email us at help@crewmeister.com
					</Typography>
					{/* <pre>{error.message}</pre> TODO: This message with unique ID will be sent over the backend for logging */}
					<Box display="flex" justifyContent="center">
						<Button onClick={resetErrorBoundary}>Try again</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ErrorPage;
