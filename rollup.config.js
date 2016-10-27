export default {
  entry: {
    app:'src/main.ts',
    vendor: []
  },
  format: 'iife',
  dest: 'build/bundle.js',
  plugins: [
    babel(),
    typescript()
  ]
};
