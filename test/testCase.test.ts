import { chromium,test } from "@playwright/test"

test('test',async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://keycode.info')
})
















// const page = await browser.newPage();
// await page.goto('https://keycode.info');
// await page.keyboard.press('A');
// await page.screenshot({ path: 'A.png' });
// await page.keyboard.press('ArrowLeft');
// await page.screenshot({ path: 'ArrowLeft.png' });
// await page.keyboard.press('Shift+O');
// await page.screenshot({ path: 'O.png' });
// await browser.close();