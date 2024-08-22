import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "./login-page";

const loginPage = new LoginPage();

Then("200 request checking for my info", () => {
  loginPage.launchApp();
  loginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
  cy.contains("My Info").click();
  cy.request(
    "GET",
    "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
  ).should((response) => {
    expect(response.status).to.eq(200);
  });
});
