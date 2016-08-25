# @jamesallardice/eslint-config-react

This module provides my personal [ESLint][esl] config for all React apps with
JSX.

## Usage

Extend this module in your own ESLint configuration file. You can use either
the default parser or [babel-eslint][besl]. If you're using Babel to compile
your code it is recommended that you use babel-eslint. Assuming you are
using the default JSON form of `.eslintrc` that will look something like this:

```json
{
  "extends": "@jamesallardice/eslint-config-base",
  "parser": "babel-eslint",
  "settings": {
    "react": {
      "version": "15.0"
    }
  }
}
```

If you do not use babel-eslint you will have to set some additional options:

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
}
```

[esl]: http://eslint.org/
[besl]: https://github.com/babel/babel-eslint
