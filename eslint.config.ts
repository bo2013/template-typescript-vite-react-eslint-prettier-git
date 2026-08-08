import { defineConfig } from "eslint/config";

import js from "@eslint/js";
import tseslint from "typescript-eslint";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig([
  {
    ignores: ["dist"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  js.configs.recommended,
  tseslint.configs.recommended,

  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
]);
