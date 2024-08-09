import { chromium, test } from '@playwright/test'
{
    test('Call chromium browser',async()=> {
        const browser = await chromium.launch({ headless: false })
        const context = await browser.newContext()
        const page = browser.newPage()
        await (await page).goto('https://www.google.com/')
        page.on('dialog', dialog => dialog.accept())
       
    } )
}