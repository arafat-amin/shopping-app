// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///D:/Spicial%20Arafat/Tutorials/Vue/projects/shopping-app/node_modules/.pnpm/vitest@2.1.8_@types+node@22.10.2_jsdom@25.0.1/node_modules/vitest/dist/config.js";

// vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///D:/Spicial%20Arafat/Tutorials/Vue/projects/shopping-app/node_modules/.pnpm/vite@6.0.3_@types+node@22.10.2/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Spicial%20Arafat/Tutorials/Vue/projects/shopping-app/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@6.0.3_vue@3.5.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/Spicial%20Arafat/Tutorials/Vue/projects/shopping-app/node_modules/.pnpm/vite-plugin-vue-devtools@7.6.8_vite@6.0.3_vue@3.5.13/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/Spicial%20Arafat/Tutorials/Vue/projects/shopping-app/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///D:/Spicial%20Arafat/Tutorials/Vue/projects/shopping-app/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFNwaWNpYWwgQXJhZmF0XFxcXFR1dG9yaWFsc1xcXFxWdWVcXFxccHJvamVjdHNcXFxcc2hvcHBpbmctYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxTcGljaWFsIEFyYWZhdFxcXFxUdXRvcmlhbHNcXFxcVnVlXFxcXHByb2plY3RzXFxcXHNob3BwaW5nLWFwcFxcXFx2aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9TcGljaWFsJTIwQXJhZmF0L1R1dG9yaWFscy9WdWUvcHJvamVjdHMvc2hvcHBpbmctYXBwL3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBtZXJnZUNvbmZpZywgZGVmaW5lQ29uZmlnLCBjb25maWdEZWZhdWx0cyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnXG5pbXBvcnQgdml0ZUNvbmZpZyBmcm9tICcuL3ZpdGUuY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZUNvbmZpZyhcbiAgdml0ZUNvbmZpZyxcbiAgZGVmaW5lQ29uZmlnKHtcbiAgICB0ZXN0OiB7XG4gICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICAgIGV4Y2x1ZGU6IFsuLi5jb25maWdEZWZhdWx0cy5leGNsdWRlLCAnZTJlLyoqJ10sXG4gICAgICByb290OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSksXG4pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFNwaWNpYWwgQXJhZmF0XFxcXFR1dG9yaWFsc1xcXFxWdWVcXFxccHJvamVjdHNcXFxcc2hvcHBpbmctYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxTcGljaWFsIEFyYWZhdFxcXFxUdXRvcmlhbHNcXFxcVnVlXFxcXHByb2plY3RzXFxcXHNob3BwaW5nLWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU3BpY2lhbCUyMEFyYWZhdC9UdXRvcmlhbHMvVnVlL3Byb2plY3RzL3Nob3BwaW5nLWFwcC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB2dWVEZXZUb29scygpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLFNBQVMsaUJBQUFBLHNCQUFxQjtBQUNqWSxTQUFTLGFBQWEsZ0JBQUFDLGVBQWMsc0JBQXNCOzs7QUNEcVMsU0FBUyxlQUFlLE9BQUFDLFlBQVc7QUFFbFksU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSnFNLElBQU0sMkNBQTJDO0FBTzlRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSUMsS0FBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QURqQjhOLElBQU1DLDRDQUEyQztBQUloUixJQUFPLHdCQUFRO0FBQUEsRUFDYjtBQUFBLEVBQ0FDLGNBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxNQUNKLGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxHQUFHLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDN0MsTUFBTUMsZUFBYyxJQUFJLElBQUksTUFBTUYseUNBQWUsQ0FBQztBQUFBLElBQ3BEO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbImZpbGVVUkxUb1BhdGgiLCAiZGVmaW5lQ29uZmlnIiwgIlVSTCIsICJVUkwiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJkZWZpbmVDb25maWciLCAiZmlsZVVSTFRvUGF0aCJdCn0K
