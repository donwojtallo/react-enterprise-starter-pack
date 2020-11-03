const {
  addWebpackPlugin,
  adjustStyleLoaders,
  override,
  fixBabelImports,
  addLessLoader
} = require("customize-cra")
const AntdThemePlugin = require("antd-theme/plugin")


// overrider CRA webpack config
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true
  }),
  adjustStyleLoaders(
    (loaders) => {
      loaders.use[0] = {
        loader: AntdThemePlugin.loader
      }
    }
  ),
  addWebpackPlugin(
    new AntdThemePlugin({
      themes: [
        {
          name: 'default',
          filename: require.resolve('antd/lib/style/themes/default.less'),
        },
        {
          name: 'dark',
          filename: require.resolve('antd/lib/style/themes/dark.less'),
        },
      ],
    })
  )
)
