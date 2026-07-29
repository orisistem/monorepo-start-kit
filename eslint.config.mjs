import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      ".next/",
      ".nuxt/",
      "coverage/",
      "infrastructure/",
      "**/*.tf",
      "**/*.yml",
      "**/*.log",
      "*.config.js",
      "*.config.mjs",
      "*.config.cjs",
      "frontend/desktop/src-tauri/"
    ]
  }
];
