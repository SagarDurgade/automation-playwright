import { BasePage } from './BasePage'

export class loginPage extends BasePage {
    loginButton= this.page.locator("[data-action='sign in']")
    async gotoUrl() {
		await this.page.goto('https://keycode.info')
    	}
    async getData(userName:string , password:string)
    {
      console.log(userName)
      console.log(password)
    }
}