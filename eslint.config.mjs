// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;


import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const eslintConfig = [
  // ✅ Base rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Ignore Prisma and other generated folders
  {
    ignores: [
      "**/.next/**",
      "**/node_modules/**",
      "**/prisma/generated/**",
      "**/.prisma/**",
      "**/@prisma/client/**",
      "**/lib/generated/**",
    ],
  },
];

export default eslintConfig;
