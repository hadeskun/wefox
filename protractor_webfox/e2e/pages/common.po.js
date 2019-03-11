var CommonPage = function() {

this.loginButton = element(by.css('.wf-c-btn--primary'));

this.get = function(string) {
  console.log("INFO: Going to webfox page");
  browser.waitForAngularEnabled(false);
  console.log(browser.getSession().value_.id_);
  return browser.get(string);
};

this.waitUntilElementIsAvailable = function(elementToInteract) {
  console.log("INFO: Waiting for element");
  var EC = protractor.ExpectedConditions;
  return EC.elementToBeClickable(elementToInteract);
};

this.getTitle = function() {
  console.log("INFO: Checking the login page");
  return browser.getTitle();
}

};
module.exports = CommonPage
