module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  retainLines: true,
  plugins: [
    'macros',
    'transform-inline-environment-variables',
    'trace',
    'styled-components',
  ],
};
