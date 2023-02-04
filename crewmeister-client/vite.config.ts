import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [
		react(),
		svgr(),
		eslint({
			fix: true,
			failOnError: false
		})
	],
	resolve: {
		alias: {
			api: path.resolve(__dirname, "./src/api"),
			assets: path.resolve(__dirname, "./src/assets"),
			atoms: path.resolve(__dirname, "./src/atoms"),
			core: path.resolve(__dirname, "./src/core"),
			models: path.resolve(__dirname, "./src/models"),
			molecules: path.resolve(__dirname, "./src/molecules"),
			organisms: path.resolve(__dirname, "./src/organisms"),
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
