// next.config.js
const path = require('path');

module.exports = {
  // ...existing config
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    };
    return config;
  }
};
