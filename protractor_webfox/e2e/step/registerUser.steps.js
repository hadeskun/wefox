var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;
chai.use(chaiAsPromised);

var registerUserPage = requirePO('registerUser');
var page = new registerUserPage();

   var registerUser = function() {
     this.When(/^I go to my contracts section$/, function() {
       return page.navigateToContracts();
     });

     this.When(/^I see no contracts available$/, function () {
       return expect(page.checkingLabelNoContracts()).to.eventually.equal('... no contracts yet', 'There are contracts available ');
     });
   };
   module.exports = registerUser;
