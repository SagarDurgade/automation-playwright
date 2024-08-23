import { Page } from '@playwright/test'
import { BasePage } from './BasePage'
import { amazonPage } from '../src/pages/amazon.page' 
import { amazonNewPage } from '../src/pages/amazonNew.page' 

export const createPage = (page: Page) => {
    return {
        base: new BasePage(page),
        amazon: new amazonPage(page),
        amazonNewPage: new amazonNewPage(page)
    }
}
