module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          "typings-for-css-modules-loader",
          "sass-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              sass: true,
              banner:
                "// This file is automatically generated. Do not modify.\n",
            },
          },
          "sass-loader",
        ],
      },
      // ...
    ],
  },
  // ...
};