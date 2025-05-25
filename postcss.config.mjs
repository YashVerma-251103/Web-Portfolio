// postcss.config.mjs
import tailwindcss from "@tailwindcss/postcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import autoprefixer from "autoprefixer";

export default {
  plugins: [tailwindcss, forms, typography, autoprefixer],
};
