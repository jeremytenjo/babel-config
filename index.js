module.exports = {
  presets: [
    [
      require('@babel/preset-env'),
      {
        targets: {
          esmodules: true
        }
      }
    ],
    require('@babel/preset-react')
  ],
  plugins: [
    require('react-hot-loader/babel'),
    require('@babel/plugin-transform-regenerator'),
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-syntax-throw-expressions'),
    require('@babel/plugin-transform-runtime'),
    require('babel-plugin-styled-components')
  ],
  env: {
    production: {
      plugins: [require('babel-plugin-transform-react-remove-prop-types')]
    }
  }
}
