module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-throw-expressions',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components'
  ],
  env: {
    production: {
      plugins: ['transform-react-remove-prop-types']
    }
  }
}
