export default {
  rules: {
    // Disallow spaces inside square brackets.
    'array-bracket-spacing': 2,

    // Require spaces inside single line blocks.
    'block-spacing': 2,

    // Require "one true brace style".
    'brace-style': 2,

    // Require camelcase identifiers.
    camelcase: 2,

    // Require trailing commas in multiline object and array literals.
    'comma-dangle': [
      2,
      'always-multiline',
    ],

    // Require a space following a comma and disallow spaces preceding commas.
    'comma-spacing': 2,

    // Require commas at the end of lines rather than the start in multiline
    // object and array literals.
    'comma-style': 2,

    // Disallow spaces inside computed property square brackets.
    'computed-property-spacing': 2,

    // Don't enforce the identifier when assigning a reference to `this`.
    'consistent-this': 0,

    // Require a newline at the end of a file.
    'eol-last': 2,

    // Require a name for function expressions.
    'func-names': 2,

    // Don't enforce a single function style (declaration or expression).
    'func-style': 0,

    // Don't blacklist any identifiers.
    'id-blacklist': 0,

    // Don't enforce a minimum or maximum identifier length.
    'id-length': 0,

    // Don't force identifiers to match a given regular expression.
    'id-match': 0,

    // Require 2-space indentation.
    indent: [
      2,
      2,
    ],

    // Require double quotes around JSX attributes.
    'jsx-quotes': 2,

    // Require a space following a colon in object literals and disallow spaces
    // before colons in object literals.
    'key-spacing': 2,

    // Require a space before and after a keyword.
    'keyword-spacing': 2,

    // Require Unix-style line endings.
    'linebreak-style': 2,

    // Require a blank line before a comment unless the comment appears on the
    // first line of a block.
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],

    // Don't enforce a maximum level of nested blocks.
    'max-depth': 0,

    // Require most lines to be a maximum of 80 characters long.
    'max-len': [
      2,
      {
        code: 120,
        ignoreUrls: true,
        ignoreTrailingComments: true,
      },
    ],

    // Don't enforce a maximum number of lines per file.
    'max-lines': 0,

    // Don't enforce a maximum level of nested callback functions.
    'max-nested-callbacks': 0,

    // Don't enforce a maximum number of function parameters.
    'max-params': 0,

    // Don't enforce a maximum number of statements per line.
    'max-statements-per-line': 0,

    // Don't enforce conditional statements to be spread over multiple lines.
    'multiline-ternary': 0,

    // Require invocations of a function whose identifier begins with an
    // uppercase character to be preceded by the `new` keyword, and vice versa.
    'new-cap': 2,

    // Require parentheses when invoking a constructor.
    'new-parens': 2,

    // Require a blank line following a group of variable declarations.
    'newline-after-var': 2,

    // Require a blank line preceding a `return` statement.
    'newline-before-return': 2,

    // Require chained property accessors to be on separate lines after a
    // maximum of 2. This is a warning and not an error to allow developer
    // discretion.
    'newline-per-chained-call': 1,

    // Disallow the `Array` constructor except when it is passed a value.
    'no-array-constructor': 2,

    // Allow bitwise operators.
    'no-bitwise': 0,

    // Allow `continue` statements.
    'no-continue': 0,

    // Allow comments on the same line as code.
    'no-inline-comments': 0,

    // Disallow `if` statements when they are the only statement within an
    // `else` block.
    'no-lonely-if': 2,

    // Disallow expressions containing unparenthesised groups of mixed boolean
    // operators.
    'no-mixed-operators': 2,

    // Disallow mixed spaces and tabs.
    'no-mixed-spaces-and-tabs': 2,

    // Disallow multiple consecutive blank lines.
    'no-multiple-empty-lines': 2,

    // Allow negated conditions.
    'no-negated-condition': 0,

    // Disallow nested conditional expressions.
    'no-nested-ternary': 2,

    // Disallow the `Object` constructor.
    'no-new-object': 2,

    // Allow the unary increment and decrement operators.
    'no-plusplus': 0,

    // Don't restrict any particular syntax. Some elements, such as `with`, are
    // restricted by other rules.
    'no-restricted-syntax': 0,

    // Disallow spaces between a function identifier and invoking parentheses.
    'no-spaced-func': 2,

    // Disallow tabs.
    'no-tabs': 2,

    // Allow conditional operators.
    'no-ternary': 0,

    // Disallow trailing whitespace.
    'no-trailing-spaces': 2,

    // Disallow dangling underscores in identifiers.
    'no-underscore-dangle': 2,

    // Disallow unnecessary conditional operators.
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],

    // Disallow whitespace between property accessors, except when the accessor
    // appears on a new line.
    'no-whitespace-before-property': 2,

    // Don't require newlines after the opening curly brace of an object
    // literal. This rule is not currently configurable to a level that would
    // work for us so developer discretion can be used in this situation for
    // now.
    'object-curly-newline': 0,

    // Require spaces inside the curly braces of object literals, destructuring
    // patterns and imports/exports.
    'object-curly-spacing': [
      2,
      'always',
    ],

    // Require newlines between object properties, unless all properties appear
    // on the same line.
    'object-property-newline': [
      2,
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],

    // Disallow multiple variable declarations on a single line.
    'one-var-declaration-per-line': [
      2,
      'always',
    ],

    // Disallow multiple variable declarations per statement.
    'one-var': [
      2,
      'never',
    ],

    // Require shorthand assignment operators where possible.
    'operator-assignment': 2,

    // Require linebreaks to appear after operators rather than before.
    'operator-linebreak': [
      2,
      'after',
    ],

    // Disallow blank lines padding blocks.
    'padded-blocks': [
      2,
      'never',
    ],

    // Disallow unnecessary quotes around object property identifiers.
    'quote-props': [
      2,
      'as-needed',
    ],

    // Require single quotes.
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],

    // Do not require JSDoc comments on every function.
    'require-jsdoc': 0,

    // Disallow spaces before semicolons and require a space following a
    // semicolon.
    'semi-spacing': 2,

    // Disallow the use of automatic semicolon insertion.
    semi: 2,

    // Don't require alphabetical sorting of variable identifiers in declaration
    // lists.
    'sort-vars': 0,

    // Disallow blocks without a preceding blank line.
    'space-before-blocks': 2,

    // Disallow spaces between function identifiers and the opening parenthesis
    // of the parameter list. Require spaces between the `function` keyword and
    // that parenthesis when no identifier is present.
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
      },
    ],

    // Disallow spaces inside parentheses.
    'space-in-parens': 2,

    // Require spaces around infix operators.
    'space-infix-ops': 2,

    // Disallow spaces following appropriate unary operators.
    'space-unary-ops': 2,

    // Require a space following the start of a comment.
    'spaced-comment': 2,

    // Disallow unicode byte order mark.
    'unicode-bom': 2,

    // Do not require regular expression literals to be wrapped in parentheses.
    'wrap-regex': 0,
  },
};
