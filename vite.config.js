import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const removeDataCyTestAttrs = (node) => {
  if (node.type === 1) {
    node.props = node.props.filter((prop) =>
      prop.type === 6 ? prop.name !== "data-cy" : true
    );
  }
};

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          nodeTransforms:
            process.env.NODE_ENV === "production" ? [removeDataCyTestAttrs] : [],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
