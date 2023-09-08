const path = require('path');

module.exports = {
  // ...otras configuraciones de Webpack...

  module: {
    rules: [
      // Regla para cargar archivos CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // ...otras reglas...
    ],
  },
};
