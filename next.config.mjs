/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@svgr/webpack'],
  //         as: '*.js',
  //       },
  //     },
  //   },
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      // issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // typescript: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                "prefixIds",
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
