const { test, expect } = require('@playwright/test')

test('Open yahoomail',async({page}) =>{


await page.goto("https://login.yahoo.com")
await page.locator('id=login-username').fill("abc@yahoomail.com")
await page.locator('id=login-signin').click()
await page.pause()




})
