const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;
const { EnvironmentPlugin } = require('webpack');

/**
 * We use the NX_TSCONFIG_PATH environment variable when using the @nrwl/angular:webpack-browser
 * builder as it will generate a temporary tsconfig file which contains any required remappings of
 * shared libraries.
 * A remapping will occur when a library is buildable, as webpack needs to know the location of the
 * built files for the buildable library.
 * This NX_TSCONFIG_PATH environment variable is set by the @nrwl/angular:webpack-browser and it contains
 * the location of the generated temporary tsconfig file.
 */
const tsConfigPath =
  process.env.NX_TSCONFIG_PATH ??
  path.join(__dirname, '../../tsconfig.base.json');

const workspaceRootPath = path.join(__dirname, '../../');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  tsConfigPath,
  [
    /* mapped paths to share */
  ],
  workspaceRootPath
);

module.exports = {
  output: {
    uniqueName: 'my-mf',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new EnvironmentPlugin({
      DH_MF_WC: 'http://localhost:4300',

    }),
    new ModuleFederationPlugin({
      name: 'my-mf',
      filename: `remoteEntry.js`,
      exposes: {
        wordingRequestCrud:
          'libs/request-components/src/lib/request-crud/bootstrap.ts',
      },
      shared: share({
        '@angular/core': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          includeSecondaries: true,
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          includeSecondaries: true,
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          includeSecondaries: true,
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          includeSecondaries: true,
        },
        rxjs: {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          includeSecondaries: true,
        },
        ...sharedMappings.getDescriptors(),
      }),
      library: {
        type: 'module',
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
