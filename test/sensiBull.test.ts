// import { test, expect } from "@playwright/test";

// test("test", async ({ page }) => {
//   await page.goto(
//     "https://web.sensibull.com/option-chain?tradingsymbol=BANKNIFTY&expiry=2024-08-07"
//   );
//   await page.waitForTimeout(10000)
//   await page.locator("#oc_atm_strike").scrollIntoViewIfNeeded;
//   await await page.screenshot({ path: "example-.png" });
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByLabel('Select the department you').selectOption('search-alias=electronics');
  await page.getByPlaceholder('Search Amazon.in').fill('iphone 13');
  await expect(page.getByLabel('iphone 13', { exact: true })).toContainText('iphone 13');
  await expect(page.getByLabel('iphone 13 back cover')).toContainText('iphone 13');
  await page.getByPlaceholder('Search Amazon.in').fill('IPhone 13 128 GB');
  await page.getByPlaceholder('Search Amazon.in').click();
  await page.getByPlaceholder('Search Amazon.in').click();
  await page.getByPlaceholder('Search Amazon.in').fill('IPhone 13 128 GB');
  await page.getByLabel('iphone 13 128 gb', { exact: true }).click();
  await page1.goto('https://www.amazon.in/Apple-iPhone-13-128GB-Starlight/dp/B09G9D8KRQ/ref=sr_1_1?crid=3CQ6LJ9IRVO6M&dib=eyJ2IjoiMSJ9.kqO2h-zVMlFINb449mJ5mBC0x-u-XqX-lCN3l8n7zdUJrQ17HskNFXrgDJz7f6HLB4kTPPPPqRstoYtJOHmGJg0h5xj43wmm8WPxRqYqzZk8EfPYtsfGyVvyq6SUsNV4XmGfyPFAXXhWzCsO3qi0Jd6MLU4T_2DPB-t9_Jyinkgp_t8bulRaL12AwxzxoNfRsRhxD9ymhyotjSsqj7nA40EcsklwmqcJ658-sbxM8UQSKyEsRIHuWNqckYyshH_2KlBvM39xD-mXjfUf_Womx-oKhAeLMUieTk_qpLjNdVI.j48wq2wnTOkHy0fQD06RyzfeuEGzzo9TCE9Byuw8KMg&dib_tag=se&keywords=iphone+13+128+gb&qid=1722526989&s=electronics&sprefix=IPhone+13+128+GB%2Celectronics%2C191&sr=1-1');
  await page1.getByRole('link', { name: 'Protect+ with AppleCare' }).click();
  await page1.getByRole('link', { name: 'Protect+ with AppleCare' }).press('ControlOrMeta+f');
  await page1.getByRole('link', { name: 'Visit the Apple Store' }).click();
  await page1.getByRole('button', { name: 'Apple Watch' }).click();
  await page1.getByRole('link', { name: 'Apple Watch SE (GPS +' }).click();
  await page1.getByLabel('Quick look, Starlight Sport').first().click();
  await page1.getByRole('group', { name: '/ 7' }).getByTestId('image').click();
  await page1.getByRole('group', { name: '/ 7' }).getByTestId('image').click();
});



