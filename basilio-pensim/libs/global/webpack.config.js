const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  output: {
    uniqueName: "global",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "global",
      filename: "remoteEntry.js",
      exposes: {
        "./ButtonComponent": "./libs/global/src/lib/global/button/button.component.ts",
        "./InputComponent": "./libs/global/src/lib/global/input/input.component.ts",
        "./FooterComponent": "./libs/global/src/lib/global/footer/footer.component.ts",
        "./HeaderComponent": "./libs/global/src/lib/global/header/header.component.ts",
      },
      shared: ["@angular/core", "@angular/common"]
    })
  ],
};
