module.exports = {
  /* config options here */
  webpack(config, { isServer, dev: isDevelopmentMode }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/
      },
      use: [
        {
          loader: "@svgr/webpack"
          // https://react-svgr.com/docs/options/
        }
      ]
    })

    config.module.rules.push({
      test: /\.po$/,
      use: [
        {
          loader: "ignore-loader"
        }
      ]
    })

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty"
      }
    }

    // Attempt to ignore storybook files when doing a production build,
    // see also: https://github.com/vercel/next.js/issues/1914
    if (!isDevelopmentMode) {
      config.module.rules.push({
        test: /\.stories.(js|tsx?)/,
        loader: "ignore-loader"
      })
    }

    return config
  },
  poweredByHeader: false,
  images: {
    domains: ["unsplash.com"]
  }
}
