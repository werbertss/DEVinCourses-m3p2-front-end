context('testesCalcSimples', () => {
  before(() => {
    cy.visit('https://localhost:44360/CalcSimples.aspx');
  });

  afterEach(() => {
    cy.get('#btnLimpar').click();
  });

  it('Soma_10_+_123', () => {
    cy.get('#txtN1').type(10);
    cy.get('#txtN2').type(134);
    cy.get('input').contains('Calcular').click();
  });

  it('Subtracao_35_-_25', () => {
    cy.get('#txtN1').type(35);
    cy.get('#rbFuncao_1').click();
    cy.get('#txtN2').type(25);
    cy.get('input').contains('Calcular').click();
  });

  it('Multiplicacao_5_*_55', () => {
    cy.get('#txtN1').type(5);
    cy.get('#rbFuncao_2').click();
    cy.get('#txtN2').type(55);
    cy.get('input').contains('Calcular').click();
  });

  it('divisao_20_/_2', () => {
    cy.get('#txtN1').type(20);
    cy.get('#rbFuncao_3').click();
    cy.get('#txtN2').type(2);
    cy.get('input').contains('Calcular').click();
  });

  it('Subtracao_70_-_45', () => {
    cy.get('#txtN1').type(70);
    cy.get('#rbFuncao_1').click();
    cy.get('#txtN2').type(45);
    cy.get('input').contains('Calcular').click();
  });

  it.only('tabuada_2_ao_10', () => {
    for (let index0 = 2; index0 < 11; index0++) {
      for (let index = 0; index < 11; index++) {
        cy.get('#txtN1').type(index0);
        cy.get('#rbFuncao_2').click();
        cy.get('#txtN2').type(index);
        cy.get('input').contains('Calcular').click();
        cy.get('#btnLimpar').click();
      }
    }
  });
});
C:\Users\ITX-GAMER\Documents\1..DEVinHouse\anotaçãoAulas\M3S08 Cypress\A2_Cypress\cypress\e2e\TesteCalc\cypress\e2e\CalcSimples.cy.js