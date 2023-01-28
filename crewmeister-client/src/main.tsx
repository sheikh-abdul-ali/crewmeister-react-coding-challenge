import React from "react";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";

import { theme } from "theme";
import "./index.css";

import Routes from "./core/Routes/Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
