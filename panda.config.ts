import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  prefix: 'pd',
  clean: true,
  polyfill: true,
  //importMap: '@styled',
  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  // Files to exclude
  exclude: [],
  // Useful for theme customization
  theme: {
    extend: {},
  },
  //jsxFramework: 'react',
  // The output directory for your css system
  outdir: 'styled-system',
  globalCss: {
    body: {
      bg: { base: 'white', _dark: 'gray.900' },
    },
  },
});
