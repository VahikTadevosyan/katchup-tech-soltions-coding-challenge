import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import pluginTailwind from "eslint-plugin-tailwindcss";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error", // Highlight Prettier issues as errors
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: pluginPrettier,
      tailwindcss: pluginTailwind,
    },
    rules: {
      "tailwindcss/classnames-order": "warn", // Enforce class name order
      "tailwindcss/enforces-shorthand": "warn", // Suggest shorthand notation
      "tailwindcss/migration-from-tailwind-2": "warn", // Notify about Tailwind 2 migrations
      "tailwindcss/no-custom-classname": "off", // Disable custom class name rule if not needed
    },
  },
];
