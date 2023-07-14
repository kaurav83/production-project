import type webpack from 'webpack'

import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jp?g|git|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const cssLoaders = buildCssLoaders(isDev);

  return [
    typescriptLoader,
    cssLoaders,
    fileLoader,
    svgLoader
  ]
}
