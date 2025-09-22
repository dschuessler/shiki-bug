/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-svelte"],
  overrides: [
    {
      files: ["*.jsonc"],
      options: {
        trailingComma: "none",
      },
    },
  ],
};
