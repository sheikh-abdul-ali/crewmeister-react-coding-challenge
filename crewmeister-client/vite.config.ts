import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
	plugins: [
		react(),
		eslint({
			fix: true,
			failOnError: false
		})
	],
	resolve: {
		alias: {
			api: path.resolve(__dirname, "./src/api"),
			components: path.resolve(__dirname, "./src/components"),
			models: path.resolve(__dirname, "./src/models"),
			pages: path.resolve(__dirname, "./src/pages"),
			theme: path.resolve(__dirname, "./src/theme"),
			utils: path.resolve(__dirname, "./src/utils"),
			"./runtimeConfig": "./runtimeConfig.browser"
		}
	},
	server: {
		port: 3000
	},
	build: {
		outDir: "./build",
		commonjsOptions: { include: [] }
	},
	optimizeDeps: {
		disabled: false
	}
});
