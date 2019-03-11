var LoginPage = function() {

var EC = protractor.ExpectedConditions;
var S = require('string');

this.userInput = element(by.id('username'));
this.userInputLabel = element(by.xpath(".//*[@for='username']"));
this.passInput = element(by.id('password'));
this.loginButton = element(by.xpath(".//*[@type='submit']"));
this.logout = element(by.xpath(".//*[@icon='logout']"));

this.loginUser = function(username, password) {
  browser.waitForAngularEnabled(false);

  console.log("INFO: Setting username");
  var isClickable = EC.visibilityOf(this.userInputLabel);
  browser.wait(isClickable, 5000);
  browser.executeScript("arguments[0].click();", this.userInputLabel.getWebElement());

  var temp = S(username).replaceAll("'", "").s;
  this.userInput.sendKeys(temp);

  console.log("INFO: Setting password");
  temp = S(password).replaceAll("'", "").s;
  this.passInput.sendKeys(temp);

  return this.loginButton.click();
};

this.checkingLogoutButton = function(){
  console.log("INFO: Checking logout button");
  browser.wait(EC.presenceOf(this.logout), 10000, 'Element taking too long to appear in the DOM');
  return this.logout.getAttribute("title");
};

};
module.exports = LoginPage
