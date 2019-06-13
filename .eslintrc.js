module.exports = {
  "globals": {
    "ga": true
  },
  "plugins": ["html", "json"],
  "extends": "elemefe",
  "rules": {
    "no-restricted-globals": ["error", "event", "fdescribe"]
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  }
}