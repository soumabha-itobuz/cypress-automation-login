export class LoginPage {

    private email = "input[name='username']";
    private password = "input[name='password']";
    private submitButton = "button[type='submit']";

    public launchApp(){
        cy.visit(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
          );
    }

    public login(userId: string, password: string){
        console.log(Cypress.env());
        cy.get(this.email).clear().type(userId);
        cy.get(this.password).clear().type(password);
        cy.get(this.submitButton).click();
    }
}