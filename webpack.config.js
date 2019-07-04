const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const fs = require('fs');

const config = [{
  entry: {
    './htdocs/js/components/DynamicDataTable.js': './jsx/DynamicDataTable.js',
    './htdocs/js/components/PaginationLinks.js': './jsx/PaginationLinks.js',
    './htdocs/js/components/StaticDataTable.js': './jsx/StaticDataTable.js',
    './htdocs/js/components/MultiSelectDropdown.js': './jsx/MultiSelectDropdown.js',
    './htdocs/js/components/Breadcrumbs.js': './jsx/Breadcrumbs.js',
    './htdocs/js/components/Form.js': './jsx/Form.js',
    './htdocs/js/components/Markdown.js': './jsx/Markdown.js',
  },
  output: {
    path: __dirname + '/',
    filename: '[name]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  resolve: {
    alias: {
      util: path.resolve(__dirname, './htdocs/js/util'),
      jsx: path.resolve(__dirname, './jsx'),
      Breadcrumbs: path.resolve(__dirname, './jsx/Breadcrumbs'),
      DataTable: path.resolve(__dirname, './jsx/DataTable'),
      DynamicDataTable: path.resolve(__dirname, './jsx/DynamicDataTable'),
      Filter: path.resolve(__dirname, './jsx/Filter'),
      FilterableDataTable: path.resolve(__dirname, './jsx/FilterableDataTable'),
      FilterForm: path.resolve(__dirname, './jsx/FilterForm'),
      Form: path.resolve(__dirname, './jsx/Form'),
      Loader: path.resolve(__dirname, './jsx/Loader'),
      Markdown: path.resolve(__dirname, './jsx/Markdown'),
      Modal: path.resolve(__dirname, './jsx/Modal'),
      MultiSelectDropdown: path.resolve(__dirname, './jsx/MultiSelectDropdown'),
      PaginationLinks: path.resolve(__dirname, './jsx/PaginationLinks'),
      Panel: path.resolve(__dirname, './jsx/Panel'),
      ProgressBar: path.resolve(__dirname, './jsx/ProgressBar'),
      StaticDataTable: path.resolve(__dirname, './jsx/StaticDataTable'),
      Tabs: path.resolve(__dirname, './jsx/Tabs'),
      TriggerableModal: path.resolve(__dirname, './jsx/TriggerableModal'),
    },
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  externals: {
    react: 'React',
  },
  node: {
    fs: 'empty',
  },
  devtool: 'source-map',
  plugins: [],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: false,
        },
        sourceMap: true,
      }),
    ],
  },
}];

// Support project overrides
if (fs.existsSync('./project/webpack-project.config.js')) {
  const projConfig = require('./project/webpack-project.config.js');
  config[0].entry = Object.assign(config[0].entry, projConfig);
}

module.exports = config;
