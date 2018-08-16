import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import butternut from 'rollup-plugin-butternut';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    // format: 'es',
    format: 'iife', // better compression with butternut because it doesn't mangle the global scope
    name: 'vm',
    file: 'dist/bundle.js',
  },
  plugins: [
    svelte(),
    resolve(),
    commonjs(),
    production && butternut(),
  ],
};
