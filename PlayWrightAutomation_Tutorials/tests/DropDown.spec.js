const { test, expect } = require('@playwright/test')

test('DropDown Handling',async({page}) =>{


await page.goto("https://testautomationpractice.blogspot.com/")


//await page.locator('#country').selectOption({label:'Australia'})

//await page.locator('#country').selectOption({value:'germany'})

//await page.locator('#country').selectOption({index:2})

const countryname = await page.locator('#country').textContent()

console.log(countryname)

await expect(countryname.includes('India')).toBeTruthy();



const  countrycount = await page.$$('#country option');
console.log(countrycount.length)

await expect(countrycount).toHaveLength(10)





await page.pause()




})





