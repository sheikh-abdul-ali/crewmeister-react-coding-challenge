import "./index.css";

import React from "react";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import ErrorPage from "pages/Error";
import Home from "pages/Home";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { theme } from "theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// TODO: Turn off strict mode.
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<ErrorBoundary FallbackComponent={ErrorPage}>
					<Home />
				</ErrorBoundary>
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
