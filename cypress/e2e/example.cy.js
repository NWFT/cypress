require('cypress-xpath')

describe('Gnews homepage', () => {
  it('finds host people items', () => {
    cy.visit('https://gnews.org')
    cy.xpath('//dl[@class="hot-news-text"]')
      .should('have.length', 5) 
  })
  it('finds host people text items', () => {
    cy.visit('https://gnews.org')
    cy.xpath('//dl[@class="hot-news-text"]//dd')
    .contains("郭文贵")
  })
  it('the hot people link test', () => {
    cy.visit('https://gnews.org')
    cy.xpath('//dl[@class="hot-news-text"]').click()
  })
})