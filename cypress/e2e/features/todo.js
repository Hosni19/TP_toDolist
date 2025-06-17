import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("je visite la page d’accueil", () => {
  cy.visit("http://localhost:3030");
});

When("je saisis {string}", (texte) => {
  cy.get(".new-todo").type(texte);
});

When("je valide la tâche", () => {
  cy.get(".new-todo").type("{enter}");
});

Then("je dois voir {string}", (texte) => {
  cy.contains(texte).should("be.visible");
});

When("je supprime {string}", (texte) => {
  cy.contains(texte)
    .parent()
    .find(".destroy")
    .invoke("show")
    .click();
});

Then("elle ne doit plus apparaître", () => {
  cy.contains("Faire les courses").should("not.exist");
});
