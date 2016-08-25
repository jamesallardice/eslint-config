export default {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
};
