describe('Home page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:9000')
  })

  it('should have "Index Page" as title', async () => {
    await expect(page).toMatch('Index Page')
  })

  it('should look consistent', async () => {
    const img = await page.screenshot()
    expect(img).toMatchImageSnapshot()
  })
})
