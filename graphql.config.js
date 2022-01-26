const defaultConfig = require("./.cache/graphql.config.json")

module.exports = {
  ...defaultConfig,
  extensions: {
    endpoints: {
      default: {
        url: "https://www.jameshush.localhost:8000/___graphql",
      },
    },
  },
}
