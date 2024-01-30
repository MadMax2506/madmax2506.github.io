import react from '@vitejs/plugin-react';
import { defineConfig, InlineConfig, UserConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [viteTsconfigPaths(), react(), svgr(), eslint()],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/setupTests.ts'],
    },
  },
} as VitestConfigExport);
