import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      // Output .d.ts files to dist/types
      outDir: 'dist/types',
      // Ensure the generated types mirror the source structure
      insertTypesEntry: true,
    }),
  ],
  esbuild: {
    minifyIdentifiers: false, // Keeps variable names
    minifySyntax: false,       // Optimizes syntax
    minifyWhitespace: false, // Preserves whitespace
    keepNames: true,
  },
  build: {
    // Library mode configuration
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      // formats: ['es', 'cjs'], // We will define this in rollupOptions instead
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: [
        {
          // ESM Build
          format: 'es',
          dir: 'dist/esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          // CJS Build
          format: 'cjs',
          dir: 'dist/cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
      ],
    },
    // Prevent empty files from being generated if pure types
    emptyOutDir: true,
  },
});
