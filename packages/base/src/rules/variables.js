export default {
  rules: {
    // Allow variable declarations to be initialised anywhere.
    'init-declarations': 0,

    // Disallow catch parameter identifiers that would shadow a variable in an
    // outer scope. This helps prevent dangerous code.
    'no-catch-shadow': 2,

    // Disallow use of the `delete` operator when the operand is a variable.
    // This helps prevent confusing code.
    'no-delete-var': 2,

    // Disallow labels that share a name with a variable. This helps prevent
    // confusing code.
    'no-label-var': 2,

    // Don't disallow any particular global objects.
    'no-restricted-globals': 0,

    // Disallow shadowing of restricted names such as `arguments`. This helps
    // prevent confusing or dangerous code.
    'no-shadow-restricted-names': 2,

    // Disallow shadowing of variables in outer scopes. This helps prevent
    // confusing code.
    'no-shadow': 2,

    // Disallow initialisation of variables to `undefined`. This helps prevent
    // unncessary code.
    'no-undef-init': 2,

    // Disallow references to undeclared variables. This helps prevent dangerous
    // code.
    'no-undef': 2,

    // Allow use of the `undefined` value.
    'no-undefined': 0,

    // Disallow unused variables. This helps prevent unnecessary code.
    'no-unused-vars': 2,

    // Disallow use of variables before they are declared. This helps prevent
    // confusing code.
    'no-use-before-define': 2,
  },
};
