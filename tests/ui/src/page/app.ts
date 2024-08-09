import { Page } from '@playwright/test'
import { BasePage } from './BasePage'
import { loginPage } from './login.page' 

export const createPage = (page: Page) => {
    return {
        base: new BasePage(page),
        login: new loginPage(page)
    }
}




// const page = await browser.newPage();
// await page.goto('https://keycode.info');
// await page.keyboard.press('A');
// await page.screenshot({ path: 'A.png' });
// await page.keyboard.press('ArrowLeft');
// await page.screenshot({ path: 'ArrowLeft.png' });
// await page.keyboard.press('Shift+O');
// await page.screenshot({ path: 'O.png' });
// await browser.close();