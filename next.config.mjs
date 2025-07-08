// next.config.mjs (change file extension to .mjs)
import path from 'path';

export default {
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
