var basePath = __dirname + '/e2e/';

exports.config = {
  allScriptsTimeout: 11000,

  // set to "custom" instead of cucumber
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    './e2e/features/**/*.feature'
  ],

  cucumberOpts: {
        // require step definitions
        require: [
            basePath + 'step/common.steps.js',
            basePath + 'step/login.steps.js',
            basePath + 'step/registerUser.steps.js'
        ],
        // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        tags: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: true,
        // <boolean> invoke formatters without executing steps
        'dry-run': false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE
        compiler: []
  },

  // Custom parameters can be specified here
  params: {
      pageObjects: [basePath + 'pages/common.po.js', basePath + 'pages/login.po.js', basePath + 'pages/registerUser.po.js'],  // path to your page object file
  },

  capabilities: {
        browserName: 'chrome'
  },

  directConnect: true,

  baseUrl: 'http://loclhost:8000',

  onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        global.requirePO = function (relativePath) {
            return require(basePath + 'pages/' + relativePath + '.po.js');
        };

        global.requireHelper = function (relativePath) {
            return require(basePath + 'helpers/' + relativePath + '.js');
        };
  }
};
