import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { traeBadgePlugin } from "vite-plugin-trae-solo-badge";

export default defineConfig(({ mode }) => {
  const isVitest = process.env.VITEST === "true";
  const isProd = mode === "production";
  const base = isProd ? (process.env.VITE_BASE ?? "/cook/") : "/";

  return {
    base,
    build: {
      outDir: "docs",
      sourcemap: "hidden",
    },
    test: {
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
    },
    plugins: [
      react({
        babel: {
          plugins: ["react-dev-locator"],
        },
      }),
      ...(isVitest
        ? []
        : [
            traeBadgePlugin({
              variant: "dark",
              position: "bottom-right",
              prodOnly: true,
              clickable: true,
              clickUrl: "https://www.trae.ai/solo?showJoin=1",
              autoTheme: true,
              autoThemeTarget: "#root",
            }),
          ]),
      tsconfigPaths(),
    ],
  };
});
