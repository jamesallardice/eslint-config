export default {
  rules: {
    // Disallow curly braces around arrow function bodies when they can be
    // omitted.
    'arrow-body-style': 2,

    // Disallow un-parenthesised arrow function parameters.
    'arrow-parens': 2,

    // Require spaces around the arrow of an arrow function.
    'arrow-spacing': 2,

    // Verify calls to `super` within constructor functions. This helps prevent
    // runtime errors.
    'constructor-super': 2,

    // Disallow spaces before the * in a generator function signature and
    // require a space following the *.
    'generator-star-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],

    // Disallow assignment to an identifier previously used to declare a class.
    // This helps prevent confusing code.
    'no-class-assign': 2,

    // Allow "confusing" arrow functions. Since parentheses are enforced this
    // rule adds no value.
    'no-confusing-arrow': 0,

    // Disallow assignment to an identifier previously used to declare a const.
    // This helps prevent confusing and broken code.
    'no-const-assign': 2,

    // Disallow class members with identical names. This helps prevent
    // confusing code.
    'no-dupe-class-members': 2,

    // Disallow multiple import statements referencing the same module.
    'no-duplicate-imports': 2,

    // Disallow calls to `Symbol` preceded by the `new` operator. This helps
    // prevent broken code.
    'no-new-symbol': 2,

    // Don't blacklist any particular modules from import.
    'no-restricted-imports': 0,

    // Disallow references to `this` before a call to `super` in constructor
    // functions. This helps prevent broken code.
    'no-this-before-super': 2,

    // Disallow unnecessary property identifier computation. This helps prevent
    // unnecessary code.
    'no-useless-computed-key': 2,

    // Disallow unnecessary constructors in class definitions. This helps
    // prevent unnecessary code.
    'no-useless-constructor': 2,

    // Disallow import and export renames that do not change the name. This
    // helps prevent unnecessary code.
    'no-useless-rename': 2,

    // Disallow the use of `var`.
    'no-var': 2,

    // Require object shorthand syntax where possible.
    'object-shorthand': 2,

    // Prefer arrow function callbacks unless the function expression is named.
    'prefer-arrow-callback': [
      2,
      {
        allowNamedFunctions: true,
      },
    ],

    // Require `const` for variables that are nver reassigned. This helps
    // prevent confusing code.
    'prefer-const': 2,

    // Require `Reflect` methods where appropriate. This helps prevent obsolete
    // code.
    'prefer-reflect': 2,

    // Disallow references to `arguments` where rest/spread can be used. This
    // helps prevent dangerous code.
    'prefer-rest-params': 2,

    // Disallow `Function.prototype.apply` when it would be possible to use the
    // spread operator.
    'prefer-spread': 2,

    // Disallow string concatentation when it would be possible to use a
    // template literal.
    'prefer-template': 2,

    // Disallow generator functions that do not contain a `yield` statement.
    'require-yield': 2,

    // Disallow spaces following spread operators.
    'rest-spread-spacing': 2,

    // Don't require alphabetical sorting of imports.
    'sort-imports': 0,

    // Disallow spaces inside curly braces within template literals.
    'template-curly-spacing': 2,

    // Disallow spaces before the * in a `yield*` expression and require a
    // space following the *.
    'yield-star-spacing': 2,
  },
};
