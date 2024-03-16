// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@reducers': path.resolve(__dirname, 'src/store/reducers'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@middlewares': path.resolve(__dirname, 'src/middlewares'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@modals': path.resolve(__dirname, 'src/components/modals'),
      '@inputs': path.resolve(__dirname, 'src/components/inputs'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@utils': path.resolve(__dirname, 'src/helpers/utils'),
      '@hooks': path.resolve(__dirname, 'src/helpers/hooks'),
      '@enums': path.resolve(__dirname, 'src/helpers/enums'),
      '@constants': path.resolve(__dirname, 'src/helpers/constants'),
      '@helpersTypes': path.resolve(__dirname, 'src/helpers/types'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
};
