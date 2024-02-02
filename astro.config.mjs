import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // By default, all icons from every installed set are included!
    // You can use the `include` option to include only the icons you need.
    // https://www.astroicon.dev/reference/configuration#include
    icon({
      include: {
        mdi: ['linkedin', 'gmail', 'github'],
      }
    })
  ]
});