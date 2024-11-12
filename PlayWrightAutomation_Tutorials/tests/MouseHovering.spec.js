const { test, expect } = require('@playwright/test')

test.beforeEach()

test('Hovering in Amzon and click Account',async({page}) =>{


await page.goto("https://amazon.in")

await page.locator("//span[text()='Account & Lists']").hover()

await page.locator("//span[text()='Your Account']").click()

await page.pause()





})
