import "./index.css";

import React from "react";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import Home from "pages/Home";
import ReactDOM from "react-dom/client";
import { theme } from "theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// TODO: Turn off strict mode.
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
