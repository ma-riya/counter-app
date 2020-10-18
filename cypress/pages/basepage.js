export class BasePage {

    navigate(url) {
        cy.visit(url);
    }

    find(selector) {
        return cy.get(selector);
    }

    refresh() {
        cy.reload();
    }

    clearField(fieldName) {
        return this.find(fieldName).first().clear();
    }

    findByText(textName) {
        return cy.contains(textName);
    }


}
