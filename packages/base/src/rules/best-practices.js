export default {
  rules: {
    // Disallow the use of object property setters without corresponding
    // getters. This helps prevent confusing code.
    'accessor-pairs': 2,

    // Disallow non-returning branches in Array methods such as `filter`. This
    // helps prevent confusing code.
    'array-callback-return': 2,

    // Disallow references to variables in scopes higher than the one in which
    // they are defined. This helps prevent confusing code.
    'block-scoped-var': 2,

    // Allow code of any cyclomatic complexity.
    complexity: 0,

    // Disallow branches that do not return a value when related branches do.
    // This helps make code consistent.
    'consistent-return': 2,

    // Disallow one-line blocks without curly braces. This helps make code
    // consistent.
    curly: 2,

    // Warn on switch statements without a default case. This helps ensure all
    // code paths have been considered.
    'default-case': 1,

    // Disallow multiline member expressions in which the accessor operator is
    // attached to the object rather than the property. This is a stylistic
    // choice.
    'dot-location': [
      2,
      'property',
    ],

    // Disallow unnecessary use of square bracket notation for property access.
    // This is a stylistic choice.
    'dot-notation': 2,

    // Disallow the use of abstract equality comparison. This helps prevent
    // unexpected behaviour.
    eqeqeq: 2,

    // Disallow the use of for-in loops without guards. This helps prevent
    // unexpected behaviour.
    'guard-for-in': 2,

    // Disallow the use of `alert`, `prompt` and `confirm`. This helps prevent
    // erroneous debugging from reaching production and forces consideration of
    // better UX patterns.
    'no-alert': 2,

    // Disallow the use of `arguments.callee` and `arguments.caller`. This helps
    // prevent inefficient and brittle code.
    'no-caller': 2,

    // Disallow the use of lexical declarations in `case` clauses. This helps
    // prevent confusing code.
    'no-case-declarations': 2,

    // Allow the use of regular expressions that "look like division".
    'no-div-regex': 0,

    // Disallow the use of return statements in `else` blocks following `if`
    // blocks that also contain return statements. This helps prevent unncessary
    // code.
    'no-else-return': 2,

    // Disallow the use of empty functions. This helps prevent unnecessary code.
    'no-empty-function': 2,

    // Disallow the use of empty destructuring patterns. This helps prevent
    // common typos.
    'no-empty-pattern': 2,

    // Disallow the use of `eval`. This helps prevent dangerous code.
    'no-eval': 2,

    // Warn on expando properties of native object prototypes. This helps
    // prevent dangerous code.
    'no-extend-native': 1,

    // Disallow unnecessary calls to `bind`. This helps prevent unnecessary
    // code
    'no-extra-bind': 2,

    // Disallow unnecessary labels. This helps prevent confusing code.
    'no-extra-label': 2,

    // Disallow "accidental" fall-throughs in switch statements. This helps
    // prevent common typos.
    'no-fallthrough': 2,

    // Disallow floating decimal points in numeric literals. This is a stylistic
    // choice.
    'no-floating-decimal': 2,

    // Allow shorthand type coercion.
    'no-implicit-coercion': 0,

    // Disallow declarations in the global scope. This helps prevent dangerous
    // code.
    'no-implicit-globals': 2,

    // Disallow implied calls to `eval` via `setTimeout` and similar. This helps
    // prevent dangerous code.
    'no-implied-eval': 2,

    // Warn on uses of `this` in seemingly invalid contexts. This helps prevent
    // confusing code.
    'no-invalid-this': 1,

    // Disallow the deprecated `__iterator__` property. This helps prevent
    // confusing and brittle code.
    'no-iterator': 2,

    // Disallow labels when they do not apply to a loop or a switch statement.
    // This helps prevent confusing code.
    'no-labels': [
      2,
      {
        allowLoop: true,
        allowSwitch: true,
      },
    ],

    // Disallow block statements that do not contain block-scoped declarations.
    // This helps prevent confusing code.
    'no-lone-blocks': 2,

    // Warn on function declarations or expressions within loops. This helps
    // prevent potential bugs.
    'no-loop-func': 1,

    // It is not possible to configure this rule in a way that would work well
    // for us so it is disabled currently.
    'no-magic-numbers': 0,

    // Disallow multiple consecutive spaces. This helps prevent messy code.
    'no-multi-spaces': 2,

    // Allow the use of multiline strings.
    'no-multi-str': 0,

    // Disallow the reassignment of native globals. This helps prevent confusing
    // code.
    'no-native-reassign': 2,

    // Disallow the `Function` constructor. This helps prevent dangerous code.
    'no-new-func': 2,

    // Disallow primitive wrapper instances. This helps prevent confusing code.
    'no-new-wrappers': 2,

    // Warn on invocations with `new` that are not part of an assignment. This
    // helps prevent confusing code.
    'no-new': 1,

    // Disallow deprecated octal escape sequences in strings. This helps prevent
    // brittle code.
    'no-octal-escape': 2,

    // Warn on octal literals. This helps prevent common typos.
    'no-octal': 1,

    // Disallow reassignment of function parameters but allow assignment to
    // properties of function parameter objects. This helps prevent confusing
    // code.
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],

    // Disallow use of the deprecated `__proto__` property. This helps prevent
    // non-standard code.
    'no-proto': 2,

    // Disallow multiple declarations with the same identifier in the same
    // scope. This helps prevent confusing and dangerous code.
    'no-redeclare': [
      2,
      {
        builtinGlobals: true,
      },
    ],

    // Disallow assignments in return statements. This helps prevent common
    // typos.
    'no-return-assign': 2,

    // Disallow `javascript:` URLs. This helps prevent dangerous code.
    'no-script-url': 2,

    // Disallow self assignment. This helps prevent confusing or unnecessary
    // code.
    'no-self-assign': 2,

    // Disallow self comparison. This helps prevent confusing or unnecessary
    // code.
    'no-self-compare': 2,

    // Warn on comma operators. This helps prevent confusing or messy code.
    'no-sequences': 1,

    // Disallow throwing of literal values. This helps prevent confusing code.
    'no-throw-literal': 2,

    // Allow loops in which variables from the condition are not modified.
    'no-unmodified-loop-condition': 0,

    // Disallow unused expressions. This helps prevent confusing or unnecessary
    // code.
    'no-unused-expressions': 2,

    // Disallow unused labels. This helps prevent unnecessary code.
    'no-unused-labels': 2,

    // Disallow unnecessary uses of `call` and `apply`. This helps prevent
    // confusing code.
    'no-useless-call': 2,

    // Disallow unnecessary string concatenation. This helps prevent confusing
    // code.
    'no-useless-concat': 2,

    // Disallow unnecessary escape characters in strings. This helps prevent
    // confusing code.
    'no-useless-escape': 2,

    // Allow the `void` operator.
    'no-void': 0,

    // Allow "warning" comments such as TODO.
    'no-warning-comments': 0,

    // Disallow `with` statements. This helps prevent dangerous and confusing
    // code.
    'no-with': 2,

    // Disallow calls to `parseInt` that do not pass a radix parameter. This
    // helps write consistent code.
    radix: 2,

    // Disallow `var` declarations that are not at the top of their scope. This
    // helps prevent confusing code.
    'vars-on-top': 2,

    // Disallow IIFEs that are not wrapped in parentheses. The invoking parens
    // must appear inside the wrapping pair.
    'wrap-iife': 2,

    // Disallow "Yoda" conditions. This helps write consistent code.
    yoda: 2,
  },
};
