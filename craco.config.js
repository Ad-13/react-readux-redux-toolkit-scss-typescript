// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@modals': path.resolve(__dirname, 'src/components/modals'),
      '@inputs': path.resolve(__dirname, 'src/components/inputs'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@enums': path.resolve(__dirname, 'src/utils/enums'),
      '@constants': path.resolve(__dirname, 'src/utils/constants'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
};
