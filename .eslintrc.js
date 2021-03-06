module.exports = {
  "env": {
  	"browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [ "airbnb", "prettier", "prettier/react", "eslint:recommended"],
  "plugins": ["react", "prettier"],
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", "jsx"]
      }
    ],
    "max-len": [2, {"code": 140, "tabWidth": 4, "ignoreUrls": true}],
    "no-console": "off",
    "no-underscore-dangle": "off",
    "prettier/prettier": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}