const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "client",
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:5000/",
        secure: false,
      },
    },
  },
});
