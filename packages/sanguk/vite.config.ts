import { fileURLToPath } from 'url';
import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../config/vite.base.config';

export default mergeConfig(
  baseConfig,
  defineConfig({
    root: __dirname,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }),
);
