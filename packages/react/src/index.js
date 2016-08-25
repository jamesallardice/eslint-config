export default {
  extends: [
    './rules/react',
    './rules/jsx',
  ].map(require.resolve),
  plugins: [
    'react',
  ],
};
