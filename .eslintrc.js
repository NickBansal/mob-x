module.exports = {
    "env": {
        "browser": true,
        "mocha": true,
        "jquery": true,
        "jest": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "extends": [
        "airbnb",
        "prettier",
        "plugin:jest/recommended",
        "plugin:eslint-comments/recommended"
    ],
    "plugins": [
        "jest",
        "react",
        "brighthr",
        "prettier",
        "compat"
    ],
    "rules": {
        "jest/no-identical-title": 0,
        "react/jsx-indent": 0,
        "react/no-typos": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-filename-extension": 0,
        "max-params": ["error", 3],
        "brighthr/display-name-unused": 2,
        "brighthr/use-prebuilt-bright-components": 2,
        "prettier/prettier": [
            "error",
            {
                "useTabs": true,
                "tabWidth": 4,
                "singleQuote": true
            }
        ],
        "compat/compat": 2,
        "no-tabs": 0,
        "func-names": 0,
        "vars-on-top": 0,
        "no-alert": "error",
        "no-use-before-define": 0,
        "lines-around-directive": 0,
        "no-param-reassign": 0,
        "consistent-return": 0,
        "no-plusplus": 0,
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": true
            }
        ],
        "eslint-comments/no-unused-disable": "error"
    }
};