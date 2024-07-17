import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "./login-page";

const loginPage = new LoginPage();

Given("I visit login page", () => {
  loginPage.launchApp();
});

When("I used valid credentials", () => {
  loginPage.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'));
});


