import { mergeConfig, defineConfig } from 'vite';
import baseConfig from '../../config/vite.base.config';

export default mergeConfig(
  baseConfig,
  defineConfig({
    root: __dirname,
    resolve: {
      alias: {
        '@': 'src',
      },
    },
  }),
);
