const path = require("path");

module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Error Track",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve("src"),
        src: path.resolve("src"),
        assets: path.resolve("src/assets"),
        components: path.resolve("src/components"),
        services: path.resolve("src/services")
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/styles/main.scss';"
      }
    }
  }
};
