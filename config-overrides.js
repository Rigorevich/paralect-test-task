const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@pages": "src/pages",
    "@utils": "src/utils",
    "@constants": "src/constants",
    "@images": "src/assets/images",
    "@api": "src/api",
    "@hooks": "src/hooks",
    "@store": "src/store",
  })(config);

  return config;
};
