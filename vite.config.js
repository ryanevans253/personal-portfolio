import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        contact: "./contact.html",
        cummins: "./cummins.html",
        realestate: "./real-estate.html",
        zekelman: "./zekelman.html",
        planted: "./planted.html",
        lysol: "./lysol.html",
        pass: "./mountain-pass.html",
      },
    },
  },
});
