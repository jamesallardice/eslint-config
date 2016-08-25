export default {
  rules: {
    // Disallow values on boolean attributes.
    'react/jsx-boolean-value': [
      2,
      'never',
    ],

    // Require the closing angle bracket of a component to be aligned with the
    // opening one if they are not on the same line.
    'react/jsx-closing-bracket-location': [
      2,
      'line-aligned',
    ],

    // Disallow spaces inside curly braces within JSX.
    'react/jsx-curly-spacing': 2,

    // Disallow spaces around `=` characters in JSX.
    'react/jsx-equals-spacing': 2,

    // Don't enforce a filename extension on files containing JSX.
    'react/jsx-filename-extension': 0,

    // Ensure each prop appears on its own line when there are linebreaks
    // between props already.
    'react/jsx-first-prop-new-line': [
      2,
      'multiline',
    ],

    // Ensure event handler methods are prefixed with `handle` and event
    // handler prop names are prefixed with `on`.
    'react/jsx-handler-names': 2,

    // Enforce 2-space indentation in JSX.
    'react/jsx-indent': [
      2,
      2,
    ],

    // Enforce 2-space indentation of props in JSX.
    'react/jsx-indent-props': [
      2,
      2,
    ],

    // Ensure elements that appear within iterators have `key` props.
    'react/jsx-key': 2,

    // Don't enforce a maximum number of props per line. This should be covered
    // by a general maximum line length rule if necessary.
    'react/jsx-max-props-per-line': 0,

    // Disallow function creation within `render`. This helps prevent
    // inefficient rendering.
    'react/jsx-no-bind': 2,

    // Disallow comments that would be rendered as text nodes. This helps
    // prevent unnecessary nodes from being rendered on the client.
    'react/jsx-no-comment-textnodes': 2,

    // Disallow multiple props with the same name. This helps prevent confusing
    // code.
    'react/jsx-no-duplicate-props': 2,

    // Allow use of literal values within JSX elements.
    'react/jsx-no-literals': 0,

    // Warn on unsafe `target="blank"` attributes.
    'react/jsx-no-target-blank': 1,

    // Disallow references to undeclared JSX components.
    'react/jsx-no-undef': 0,

    // Enforce PascalCase for JSX components.
    'react/jsx-pascal-case': 2,

    // Don't require props to be alphabetically sorted.
    'react/jsx-sort-props': 0,

    // Require a space before the closing slash of a self-closing tag.
    'react/jsx-space-before-closing': 2,

    // Prevent React from being flagged as unused if JSX is present.
    'react/jsx-uses-react': 2,

    // Prevent variables referenced within JSX as being flagged as unused.
    'react/jsx-uses-vars': 2,

    // Require parentheses around multiline JSX elements.
    'react/jsx-wrap-multilines': 2,
  },
};
