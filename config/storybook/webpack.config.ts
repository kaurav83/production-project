import webpack, { RuleSetRule } from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

interface Rule {
  test: string;
  type: string;
  resolve?: {
    fullySpecified: boolean;
  };
  use?: any;
  include?: string[];
  exclude?: string[];
}

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: any) => {
      if (/svg/.test(rule.test)) {
        return {
          ...rule,
          exclude: /\.svg$/i,
        };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module?.rules?.push(buildCssLoaders(true));

  return config;
};
