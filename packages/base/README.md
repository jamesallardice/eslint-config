# @jamesallardice/eslint-config-base

This module provides my personal base [ESLint][esl] config used for all
JavaScript. It supports ES2015+ and numerous environments, including browser and
Node.js, out of the box.

## Usage

Extend this module in your own ESLint configuration file. You can use either
the default parser or [babel-eslint][besl]. If you're using Babel to compile
your code it is recommended that you use babel-eslint. Assuming you are
using the default JSON form of `.eslintrc` that will look something like this:

```json
{
  "extends": "@jamesallardice/eslint-config-base",
  "parser": "babel-eslint"
}
```

[esl]: http://eslint.org/
[besl]: https://github.com/babel/babel-eslint
