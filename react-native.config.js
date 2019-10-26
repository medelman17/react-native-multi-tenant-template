module.exports = {
  dependencies: {
    'react-native-permissions': {
      platforms: {
        ios: null,
      },
    },
  },
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./assets/fonts'], // stays the same
};
