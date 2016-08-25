export default {
  rules: {
    // Disallow the use of `console`. This is useful for ensuring erroneous
    // debug messages don't make it into production.
    'no-console': 2,

    // Disallow the use of assignments in conditional statements unless the
    // assignment expression is wrapped in parentheses. This helps catch common
    // typos.
    'no-cond-assign': 2,

    // Disallow the use of constant expressions in conditionals. This helps to
    // prevent unncessary code such as branches that can never execute.
    'no-constant-condition': 2,

    // Warn on use of control characters in regular expressions. If such a
    // character is present it's likely to be a typo.
    'no-control-regex': 1,

    // Disallow the use of `debugger`. This is useful for ensuring development
    // code does not make it into production.
    'no-debugger': 2,

    // Disallow the use of duplicate function parameter identifiers. This helps
    // prevent common typos.
    'no-dupe-args': 2,

    // Disallow the use of duplicate object key identifiers. This helps prevent
    // common typos.
    'no-dupe-keys': 2,

    // Disallow the use of duplicate case labels in switch statements. This
    // helps prevent common typos.
    'no-duplicate-case': 2,

    // Disallow the use of empty character classes in regular expressions. This
    // helps prevent common typos.
    'no-empty-character-class': 2,

    // Disallow empty block statements, including catch clauses. This helps
    // prevent unnecessary code and ensures proper comments are added in the
    // rare cases where empty blocks might be required.
    'no-empty': 2,

    // Disallow assignment to the exception parameter in catch clauses. This
    // helps prevent dangerous code since such an assignment completely destroys
    // the error object.
    'no-ex-assign': 2,

    // Disallow unnecessary casts to boolean values. This helps prevent
    // unnecessary code.
    'no-extra-boolean-cast': 2,

    // Disallow the use of unnecessary parentheses except in cases where a
    // return statement contains an assignment, or in nested binary expressions.
    // This helps prevent unnecessary and unreadable code.
    'no-extra-parens': [
      2,
      'all',
      {
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],

    // Disallow the use of unnecessary semicolons. This helps prevent
    // unnecessary and unreadable code.
    'no-extra-semi': 2,

    // Disallow the reassignment of function declarations. This helps prevent
    // common typos.
    'no-func-assign': 2,

    // Disallow function declarations in blocks. This helps prevent
    // unpredictable code.
    'no-inner-declarations': 2,

    // Disallow invalid regular expressions in RegExp constructor arguments.
    // This helps prevent runtime syntax errors.
    'no-invalid-regexp': 2,

    // Disallow unusual whitespace characters such as non-breaking spaces
    // everywhere, including inside string and template literals. This helps
    // prevent typos and unexpected effects.
    'no-irregular-whitespace': [
      2,
      {
        skipStrings: false,
      },
    ],

    // Disallow the negation of the left-hand-side operand of an `in`
    // expression. This helps prevent common typos.
    'no-negated-in-lhs': 2,

    // Disallow invocations of global object properties such as Math. This helps
    // prevent common typos.
    'no-obj-calls': 2,

    // Warn on use of Object.prototype built-ins directly on objects. This helps
    // prevent fragile code.
    'no-prototype-builtins': 1,

    // Disallow the use of multiple spaces in regular expressions. This helps
    // prevent unreadable code.
    'no-regex-spaces': 2,

    // Disallow the use of sparse arrays. This helps prevent common typos.
    'no-sparse-arrays': 2,

    // Disallow confusing multiline expressions. This helps prevent unreadable
    // code.
    'no-unexpected-multiline': 2,

    // Disallow unreachable code following e.g. return statements. This helps
    // prevent unnecessary code.
    'no-unreachable': 2,

    // Warn about the use of control flow statements in `finally` blocks. This
    // helps prevent confusing code.
    'no-unsafe-finally': 1,

    // Disallow comparisons to NaN that do not use `Number.isNaN` or the global
    // `isNaN`. This helps prevent confusing code.
    'use-isnan': 2,

    // Warn on use of an unusual comparison value following a `typeof` operator.
    // This helps prevent common typos.
    'valid-typeof': 1,
  },
};
