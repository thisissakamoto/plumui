import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist/types',
      insertTypesEntry: true,
    }),
  ],
  esbuild: {
    minifySyntax: false,
    minifyWhitespace: false,
    minifyIdentifiers: false,
    keepNames: true,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      output: [
        {
          format: 'es',
          dir: 'dist/esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
      ],
    },
    emptyOutDir: true,
  },
});
