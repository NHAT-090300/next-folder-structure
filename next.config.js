// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  reactStrictMode: false,
  env: {
    HOST_WEB: process.env.HOST_WEB,
    ENDPOINT: process.env.ENDPOINT,
    API_PREFIX_RETX: process.env.API_PREFIX_RETX,
  },
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
  },
  compress: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    'antd',
    '@ant-design',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-notification',
    'rc-tooltip',
    'rc-tree',
    'rc-table',
  ],
  webpack: (config) => {
    config.resolve.alias['classnames'] = path.resolve(__dirname, 'node_modules/classnames');
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};
