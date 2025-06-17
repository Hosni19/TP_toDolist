Feature: Ajouter et supprimer une tâche

  Scenario: Ajouter et supprimer une tâche
    Given je visite la page d’accueil
    When je saisis "Faire les courses"
    And je valide la tâche
    Then je dois voir "Faire les courses"
    When je supprime "Faire les courses"
    Then elle ne doit plus apparaître
