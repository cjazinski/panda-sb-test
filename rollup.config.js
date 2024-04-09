import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
//import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';

// eslint-disable-next-line
const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: Object.keys(packageJson.peerDependencies),
  plugins: [
    peerDepsExternal(),
    scss(),
    resolve({ browser: true }),
    // babel({
    //   babelHelpers: 'runtime',
    //   exclude: '**/node_modules/**',
    //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // }),
    commonjs(),
    image(),
    typescript({
      useTsconfigDesclarationDir: true,
      tsconfig: './tsconfig.json',
      clean: true,
      rollupCommonJSResolveHack: false,
    }),
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV === 'production' && terser(),
  ],
};
