const { test, expect } = require('@playwright/test')

let page; //global variable

test.beforeAll(async ({ browser }) => {

   page = await browser.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/") //instance is created

})

test.afterAll(async () => {

    await page.close()

})

test('DropDown Handling', async () => {

    const countryname = await page.locator('#country').textContent()

    console.log(countryname)

    await expect(countryname.includes('India')).toBeTruthy();

    const countrycount = await page.$$('#country option');
    console.log(countrycount.length)

    await expect(countrycount).toHaveLength(10)
})

test('Alert Handling', async () => {

    await page.on('dialog', async dialog => {


        await page.waitForTimeout(3000);

        await expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept();

        //await dialog.dismiss() //cancel 


    })


    await page.locator("//button[text()='Simple Alert']").click();  //alert will open here
})

