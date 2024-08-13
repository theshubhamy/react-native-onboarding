const {getDefaultConfig} = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const customConfig = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
    },
  };

  return {
    ...defaultConfig,
    ...customConfig,
    resolver: {
      ...defaultConfig.resolver,
      ...customConfig.resolver,
    },
    transformer: {
      ...defaultConfig.transformer,
      ...customConfig.transformer,
    },
  };
})();
