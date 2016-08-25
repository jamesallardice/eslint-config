export default {
  rules: {
    // Allow callbacks in branches that are not part of a return statement. This
    // rule is not robust enough to enable by default.
    'callback-return': 0,

    // Warn on non-global calls to `require`. This helps prevent inconsistent
    // code.
    'global-require': 1,

    // Allow the first callback parameter to be ignored. This rule is not robust
    // enough to enable by default.
    'handle-callback-err': 0,

    // Ensure imports are grouped in a sensible manner. This helps ensure code
    // is consistent.
    'no-mixed-requires': 2,

    // Disallow invocations of `require` with the `new` operator. This helps
    // prevent common mistakes.
    'no-new-require': 2,

    // Disallow string concatenation of `__dirname` and similar. This helps
    // prevent unportable and brittle code.
    'no-path-concat': 2,

    // Allow `process.env`.
    'no-process-env': 0,

    // Allow `process.exit()`.
    'no-process-exit': 0,

    // Don't restrict any modules.
    'no-restricted-modules': 0,

    // Allow synchronous methods.
    'no-sync': 0,
  },
};
