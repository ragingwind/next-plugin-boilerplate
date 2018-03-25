module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const {
        isServer,
        dev,
        buildId,
        defaultLoaders,
        config: {
          distDir
        }
      } = options;

      if (!defaultLoaders) {
        throw new Error( 'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade' );
      }

      const {webpack, pluginConfig = {}} = nextConfig;

      if (typeof webpack === 'function') {
        return webpack(config, options);
      }

      return config;
    }
  })
}
