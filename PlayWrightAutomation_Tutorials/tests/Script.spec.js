const { test, expect } = require("@playwright/test")

test('Open Google.com',async({page})=>{

    await page.goto("https://www.facebook.com")

    //await page.locator('id=APjFqb').fill("Testing")

    await page.locator('id=email').fill("abc@gmail.com")
    await page.locator('id=pass').fill("1234555")

    await page.locator('//button[@name="login"]').click()

    await page.pause() //stop execution they will provide inspector with stop execution

})