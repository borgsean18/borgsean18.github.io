const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './index.js',

  // Output configuration
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.css$/, // Apply to .css files
        use: ['style-loader', 'css-loader'], // Use these loaders
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/, // Handle font files
        type: 'asset/resource', // Use Webpack 5's built-in asset module
      },
    ],
  },

  // Development server configuration (optional)
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the dist folder
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port for the dev server
    open: true, // Open the browser automatically
  },

  // Mode (development or production)
  mode: 'development', // Change to 'production' for optimized builds
};