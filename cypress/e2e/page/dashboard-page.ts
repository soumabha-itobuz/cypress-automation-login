export class DashboardPage {

    private pageTitle = ".oxd-topbar-header-breadcrumb > .oxd-text"
    public verifyDashboard(){
        cy.get(this.pageTitle).should(
            "have.text",
            "Dashboard"
          );
    }
    
}
