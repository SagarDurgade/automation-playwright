import { test, expect } from '@playwright/test'
import { createPage } from './app' 

test('Verify the account number', async({page})=>{
	await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
	await page.getByRole('button',{name:'Customer Login'}).click()
    await page.locator('#userSelect').selectOption('Harry Potter')
	await page.getByRole('button',{name:'Login'}).click()
    await expect ( page.locator("//div[@ng-hide='noAccount']/strong[@class='ng-binding']").first()).toHaveText('1004')
	
})

test('test', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.getByRole('button', { name: 'Home' }).click();
    await page.getByRole('button', { name: 'Customer Login' }).click();
    await page.locator('#userSelect').selectOption('2');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('strong').filter({ hasText: '1004' })).toBeVisible();
  });
