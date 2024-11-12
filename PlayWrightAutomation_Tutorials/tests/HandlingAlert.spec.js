const { test, expect } = require('@playwright/test')

test('Hovering in Amzon and click Account',async({page}) =>{


await page.goto("https://testautomationpractice.blogspot.com/")

//enabling the dialogue in plywright

await page.on('dialog' , async dialog=>{


await page.waitForTimeout(3000);

await expect(dialog.message()).toContain("I am an alert box!")
await dialog.accept();

//await dialog.dismiss() //cancel 


})



await page.locator("//button[text()='Simple Alert']").click();  //alert will open here



await page.pause()





})
