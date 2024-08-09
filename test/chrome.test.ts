import {  chromium, expect, test } from '@playwright/test'

test('call browser without page', async( ) =>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://playwright.dev/docs/api/class-test')
    // await page.waitForEvent('console')
    await expect (page).toHaveTitle('Playwright Test | Playwright')
    const page1 = await context.newPage()
    await page1.goto('https://www.google.com/')
    await expect (page1).toHaveTitle('Google')
    // await waitFor
})