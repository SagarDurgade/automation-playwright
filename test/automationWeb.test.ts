import { expect, test } from "@playwright/test"

test("Registration", async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.getByPlaceholder('First Name').fill('Sagar')
    await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'submit' }).click()
    await page.locator("[value='Cricket']").check() 
    expect (page.locator("[value='Cricket']")).toBeChecked()
    await page.waitForTimeout(5000)
})
