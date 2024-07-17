import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { DashboardPage } from "./dashboard-page";


const dashboardPage =  new DashboardPage();

Then("I can see the dashboard", () => {
  dashboardPage.verifyDashboard(); 
});