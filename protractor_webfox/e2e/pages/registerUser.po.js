var RegisterUserPage = function() {

var EC = protractor.ExpectedConditions;

this.contractsLink = element(by.xpath(".//*[@icon='contracts']"));
this.noContractsLabel = element(by.css(".contracts-list p"));

this.navigateToContracts = function() {
  browser.waitForAngularEnabled(false);
  console.log("INFO: Going to contracts");
  return this.contractsLink.click();
};

this.checkingLabelNoContracts = function() {
  console.log("INFO: Checking if there is a contract");
  browser.wait(EC.presenceOf(this.noContractsLabel), 10000, 'Element taking too long to appear in the DOM');
  return browser.executeScript('return arguments[0].innerHTML;', this.noContractsLabel);
}

};
module.exports = RegisterUserPage
