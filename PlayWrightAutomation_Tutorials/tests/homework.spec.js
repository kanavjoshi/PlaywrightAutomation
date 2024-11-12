const { test, expect } = require('@playwright/test')

test('hovering functionality',async({page}) =>{


await page.goto("https://www.ebay.com/")
await page.locator("(//a[text()='Home & Garden'])[1]").hover()
await page.locator("(//a[text()='Home Improvement'])[2]").click()
await page.pause()




})