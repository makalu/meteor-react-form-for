Package.describe({
  name: 'makalu:react-form-for',
  version: '0.0.1',
  summary: "react-form-for 1.1.1 by James Friend, repackaged for Meteor.",
  git: 'https://github.com/makalu/meteor-react-form-for.git',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.4.3',
  'react-form-for': '1.1.0',
  'react-addons': '0.9.0'
});

Package.onUse(function(api) {
  api.use(['react-runtime@0.13.3_6', 'cosmos:browserify@0.5.0']);
  api.imply(['react-runtime@0.13.3_6']);

  api.add_files([
    'react-form-for.browserify.options.json',
    'react-form-for.browserify.js'
  ]);

  api.export('ReactFormFor');
});
