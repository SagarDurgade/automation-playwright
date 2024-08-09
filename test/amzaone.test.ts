import { expect, test } from '@playwright/test'

test('verify the amazon cart', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("input[name='field-keywords']").fill("iphone 15 pro max")
    await page.locator("[type=submit]").click()
    // await page.getByRole('button', {name:'Add to cart'}).click()
    await expect (page.locator('.nav-cart-count')).toHaveText('Samsumng')
})