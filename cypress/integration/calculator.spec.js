// Tests just to showcase Svelte.. First time writing FE tests, 100% not correct

const baseUrl = 'http://localhost:3000/';

describe('Calculator website', () => {
	it('Should be able to visit /calc', () => {
		cy.visit(baseUrl);

		cy.contains('Calculator');

		const calculatorLinkBtn = cy.get('#svelte > header > a:nth-child(5)');
		calculatorLinkBtn.click();
	});

	it('Should be able to calculate', () => {
		cy.visit(baseUrl + 'calc');

		cy.get('#svelte > #a').as('inputA');
		cy.get('#svelte > #b').as('inputB');
		cy.get('#svelte > #result').as('output');

		cy.get('@inputA').type('2'); // 12 + 2
		cy.get('@output').contains('14');
		cy.get('@inputA').type('3'); // 123 + 2
		cy.get('@output').contains('125');
		cy.get('@inputB').type('2'); // 123 + 22
		cy.get('@output').contains('145');
		cy.get('@inputB').type('8'); // 123 + 228
		cy.get('@output').contains('351');
	});
});
