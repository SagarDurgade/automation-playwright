import { test, expect, chromium } from '@playwright/test';

test('amazon', async ({ }) => {
  test.setTimeout(60000)
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('https://www.amazon.in/')

  expect(await page.title()).toContain('Amazon')

  await page.getByLabel('Select the department you').selectOption('search-alias=electronics')

  await page.getByPlaceholder('Search Amazon.in').fill("iphone 13")
  
  const rows = page.locator("[class='left-pane-results-container'] [role='button']")
    for (let i = 0; i < await rows.count(); ++i)
      await expect(rows.nth(i)).toContainText('iphone 13')
  page.getByPlaceholder('Search Amazon.in').clear
  await page.waitForTimeout(2000)

  await page.getByPlaceholder("Search Amazon.in").fill('iphone 13 128GB')
  await page.getByLabel('iphone 13 128GB').first().click()
  await page.waitForTimeout(2000)

  const pagePromise = context.waitForEvent('page')
  await page.locator("//*[contains(text(),'Apple iPhone 13')]").first().click()
  const newPage = await pagePromise

  // Navigate to next tab and click on Visit the Apple Store
  await newPage.locator("//*[contains(text(),'Visit the Apple Store')]").click()
  await newPage.waitForLoadState()
  // await page.waitForTimeout(2000)
  await newPage.getByRole("button", { name: "Apple Watch" }).click()
  await newPage.getByRole("link", { name: "Apple Watch SE (GPS + Cellular)" }).click()
  await newPage.getByLabel("Quick look, Starlight Sport").first().click()
  await expect(newPage.getByTestId("product-showcase-title")).toContainText("[GPS + Cellular 40 mm]")
})