import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type BuildOptions } from './types/config'

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => ([
  new HTMLWebpackPlugin({
    template: paths.html
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  }),
  new webpack.DefinePlugin({
    IS_DEV: JSON.stringify(isDev)
  }),
  new webpack.HotModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
])
