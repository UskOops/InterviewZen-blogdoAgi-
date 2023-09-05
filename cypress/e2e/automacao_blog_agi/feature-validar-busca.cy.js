// busca.spec.js
import elementos from './elementos'; // Importe os seletores de elementos

describe('Busca na página Home', () => {
  context('Validar busca na página home', () => {
    beforeEach(() => {
      cy.visit('https://blogdoagi.com.br');
    });

    it('Validar busca por pesquisa existente', () => {
      cy.get(elementos.bt_search).click();
      cy.get(elementos.input_search).type('Teste');
      cy.get(elementos.bt_submit).click();
      cy.get(elementos.result_true).should('contain', 'Teste'); // Usar should para espera explícita
    });

    it('Validar busca por pesquisa inexistente', () => {
      cy.get(elementos.bt_search).click();
      cy.get(elementos.input_search).type('ttt');
      cy.get(elementos.bt_submit).click();
      cy.get(elementos.result_false).should('contain', 'Nenhum resultado'); // Usar should para espera explícita
    });
  });
});
