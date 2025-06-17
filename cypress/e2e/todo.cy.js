describe('Page d\'accueil', () => {
    it('doit afficher le titre et les éléments de base', () => {
        cy.visit('http://localhost:3030')
        cy.contains('todos').should('be.visible')
    })

    it('ajoute une tâche', () => {
        cy.visit('http://localhost:3030')

        // Wait for the .new-todo input to appear (make sure it's ready)
        cy.get('.new-todo', {
            timeout: 10000
        }).should('be.visible').type('Acheter du lait{enter}')

        cy.contains('Acheter du lait').should('exist')
    })

    it('supprime une tâche', () => {
        cy.visit('http://localhost:3030')

        cy.get('.new-todo', {
            timeout: 10000
        }).should('be.visible').type('À supprimer{enter}')

        cy.contains('À supprimer').parent().find('.destroy').invoke('show').click()

        cy.contains('À supprimer').should('not.exist')
    })

    it('modifie une tâche', () => {
        cy.visit('http://localhost:3030')

        cy.get('.new-todo', {
            timeout: 10000
        }).should('be.visible').type('À modifier{enter}')

        cy.contains('À modifier').dblclick()
    })

    it('filtre les tâches actives et complètes', () => {
        cy.visit('http://localhost:3030')

        cy.get('.new-todo', {
            timeout: 10000
        }).should('be.visible').type('Active task{enter}')
        cy.get('.new-todo').type('Completed task{enter}')

        cy.contains('Completed task').parent().find('.toggle').click()

        cy.contains('Active').click()
        cy.contains('Active task').should('exist')
        cy.contains('Completed').click()
        cy.contains('Completed task').should('exist')
    })

    it('met à jour le compteur', () => {
        cy.visit('http://localhost:3030')

        cy.get('.new-todo', {
            timeout: 10000
        }).should('be.visible').type('Tâche 1{enter}')
        cy.get('.new-todo').type('Tâche 2{enter}')
    })

    it('autorise les doublons', () => {
        cy.visit('http://localhost:3030')

        cy.get('.new-todo', {
            timeout: 10000
        }).should('be.visible').type('Même tâche{enter}')
        cy.get('.new-todo').type('Même tâche{enter}')

        cy.contains('Même tâche').should('exist')
    })

    it('ne supprime que la tâche ciblée', () => {
        cy.visit('http://localhost:3030')

        cy.get('.todo-list li', {
            timeout: 10000
        }).should('have.length.greaterThan', 0)

        cy.get('.todo-list li').first().find('.destroy').invoke('show').click()

        cy.get('.todo-list li').contains('Même tâche').should('exist')
    })
})