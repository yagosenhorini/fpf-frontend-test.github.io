const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Defina "production" para produção
  devtool: 'source-map', // Habilitar source maps para depuração
  entry: {
    home: [
      path.resolve(__dirname, 'src/scss/main.scss'),
      path.resolve(__dirname, 'src/js/index.js') // Certifique-se de que este é o arquivo JS principal
    ]
  },
  output: {
    filename: 'src/js/index.js', // Saída do JS
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpa a pasta "dist" a cada build
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css', // Saída do CSS
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'), // Seu arquivo HTML de entrada
      filename: 'index.html', // Nome do arquivo HTML gerado
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Transpila JS usando Babel
      },
      {
        test: /\.json$/,
        type: 'json', // Webpack 5 já tem suporte nativo a JSON
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extrai o CSS em arquivos separados
          {
            loader: 'css-loader',
            options: {
              sourceMap: true, // Habilita source maps
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // Habilita source maps
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Carrega imagens
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]', // Salva as imagens dentro de /dist/img
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss', '.json'], // Adiciona suporte para SCSS
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'), // Serve arquivos estáticos
    },
    port: 3000, // Porta do servidor
    hot: true, // Habilita Hot Module Replacement
    open: true, // Abre o navegador automaticamente
  },
};
