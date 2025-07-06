// eslint.config.js
import next from 'eslint-config-next';

export default [
  {
    ...next,
    files: ['**/*.{js,ts,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
];
