var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
chai.use(chaiAsPromised);


var commonPage = requirePO('common');
var page = new commonPage();
   var common = function() {
     this.Given(/^I go to webfox site$/, function() {
       return page.get('https://my.wefox.de/login?redirect=https://my.wefox.de/');
     });

     this.When(/^I can see the login page$/, function () {
       return expect(page.getTitle()).to.eventually.equal('Jetzt anmelden – wefox', 'The login page is not loaded ');
     });
   };
   module.exports = common;
