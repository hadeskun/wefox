var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
chai.use(chaiAsPromised);

var loginPage = requirePO('login');
var page = new loginPage();

   var login = function() {
     this.When(/^I login as user '(.*)' and password '(.*)'$/, function(user, pass) {
       return page.loginUser(user, pass);
     });

     this.When(/^I can see the new view as a registered user$/, {timeout: 2 * 5000}, function () {
       return expect(page.checkingLogoutButton()).to.eventually.equal('Logout', 'User not registered ');
     });
   };
   module.exports = login;
