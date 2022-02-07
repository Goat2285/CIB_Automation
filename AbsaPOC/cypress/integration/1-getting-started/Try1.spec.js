describe('My First Test', function (){
it('Does not do much', function() {
	cy.visit('http://www.way2automation.com/angularjs-protractor/webtables/')
	cy.contains('Add User').click()
	cy.get('input[name="FirstName"]').type('FName1')
	cy.get('input[name="LastName"]').type('LName1')
	cy.get('input[name="UserName"]').type('User1')
	cy.get('input[name="Password"]').type('Pass1')
	cy.get('[type="radio"]').check('15')
	cy.get('select').select('Admin').should('have.value', '2')
	cy.get('input[name="Email"]').type('admin@mail.com')
	cy.get('input[name="Mobilephone"]').type('082555')
	cy.contains('Save').click()
	
	.wait(5000)
	
	
	cy.contains('Add User').click()
	cy.get('input[name="FirstName"]').clear().type('FName2')
	cy.get('input[name="LastName"]').clear().type('LName2')
	cy.get('input[name="UserName"]').clear().type('User2')
	cy.get('input[name="Password"]').clear().type('Pass2')
	cy.get('[type="radio"]').check('16')
	cy.get('select').select('Customer').should('have.value', '1')
	cy.get('input[name="Email"]').clear().type('customer@mail.com')
	cy.get('input[name="Mobilephone"]').clear().type('083444')
	cy.contains('Save').click()
	
})
})