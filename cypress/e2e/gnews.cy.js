require('cypress-xpath')

describe('Gnews homepage', () => {
    // Arrange - setup initial app state
    // - Visit a web page
    // - Query for an element
    // Act - take an action
    // - Interact with that element
    // Assert - make an assertion
    // - make an assertion about page content

  beforeEach(() => {
    cy.visit('/')
  })  

  it('主页Hot people内容检查', () => {
    cy.xpath('//dl[@class="hot-news-text"]//dd')
    .contains("郭文贵")
    cy.xpath('//dl[@class="hot-news-text"]//dd')
    .contains("普京")
    cy.xpath('//dl[@class="hot-news-text"]//dd')
    .contains("习近平")
    cy.xpath('//dl[@class="hot-news-text"]//dd')
    .contains("江泽民")
    cy.xpath('//dl[@class="hot-news-text"]//dd')
    .contains("哈梅内伊")
    expect(true).to.equal(true)
  })

  it('test the login button', () => {
    cy.get(':nth-child(4) > :nth-child(1) > .h-6').click()
    // login page should be shwon after clicked
    cy.xpath('//input[@name="username"]')
      .type("user@gnews.org")
      .should('have.value', 'user@gnews.org')
    cy.xpath('//input[@name="password"]')
      .type("password")
      .should("have.value", 'password')
    cy.get('.grid-col-1 > .btn-primary').click()
  })

  it('test the hot people link', () => {
    // Click the first 'hot people' link
    cy.get('dd')
      .eq(0)
      .click()
    // check the new page's title text
    cy.get('.mb-3', {
      timeout: 30000
    }).should('have.text', "郭文贵")

  })

  it('test posting new posts', () => {
    // cy.route('dd').eq(0)
    expect(true).to.equal(true)
  })


})