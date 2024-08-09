import { test } from '@playwright/test'
import { createPage } from '../tests/ui/src/page/app' 

test.describe('Describe of test case', () => {
    test('[121]Login test', async ({ page }) => {
        const pages = createPage(page)
        pages.login.gotoUrl
        pages.login.getData(testData.userName, testData.pass)
        
    })
})

const testData ={
    userName: 'Sagar',
    pass: 'Durgade'
}