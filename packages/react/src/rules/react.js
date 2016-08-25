export default {
  rules: {
    // Don't require a `displayName` property on every component.
    'react/display-name': 0,

    // Don't blacklist any particular prop types.
    'react/forbid-prop-types': 0,

    // Warn on dangerous JSX properties. This is not an error because there are
    // valid use cases and developer discretion is required.
    'react/no-danger': 1,

    // Disallow deprecated methods.
    'react/no-deprecated': 2,

    // Disallow calls to `setState` in `componentDidMount`. This helps prevent
    // inefficient rendering.
    'react/no-did-mount-set-state': 2,

    // Disallow calls to `setState` in `componentDidUpdate`. This helps prevent
    // inefficient rendering.
    'react/no-did-update-set-state': 2,

    // Disallow direct mutations of state. This helps prevent dangerous code.
    'react/no-direct-mutation-state': 2,

    // Disallow `findDOMNode`. This helps prevent code that may be deprecated
    // in the future.
    'react/no-find-dom-node': 2,

    // Disallow `isMounted`. This helps prevent code that will be deprecated in
    // the future.
    'react/no-is-mounted': 2,

    // Disallow multiple component definitions in one file, unless they are
    // stateless.
    'react/no-multi-comp': [
      2,
      {
        ignoreStateless: true,
      },
    ],

    // Disallow usage of the return value of `React.render`. This helps prevent
    // code that will be deprecated in the future.
    'react/no-render-return-value': 2,

    // Allow `setState`.
    'react/no-set-state': 0,

    // Disallow strings as refs. This helps prevent code that will rely upon
    // deprecated features.
    'react/no-string-refs': 2,

    // Disallow unknown DOM properties in JSX. This helps prevent buggy code.
    'react/no-unknown-property': 2,

    // Disallow `React.createClass`.
    'react/prefer-es6-class': 2,

    // Disallow class-based components when they do not rely on state.
    'react/prefer-stateless-function': 2,

    // Require `propTypes`.
    'react/prop-types': 2,

    // Require React to be in scope when using JSX.
    'react/react-in-jsx-scope': 2,

    // Warn on components with no `shouldComponentUpdate` method. This helps
    // prevent inefficient rendering.
    'react/require-optimization': 1,

    // Disallow `render` methods without `return` statements.
    'react/require-render-return': 2,

    // Disallow closing tags on components with no children.
    'react/self-closing-comp': 2,

    // Require component methods to be in a sensible order.
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          '/^constructor$/',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],

    // Don't require `propTypes` properties to be sorted alphabetically.
    'react/sort-prop-types': 0,
  },
};
