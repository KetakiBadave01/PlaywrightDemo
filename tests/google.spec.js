const {test,expect} = require('@playwright/test')
const { title } = require('process')

test("Verify Application Title",async function({page}){
   await page.goto("https://www.google.com/")
     const url=await page.url()  //print url
     console.log("URL is"+url)   //print title

     const title=await page.title()
     console.log("Title is:"+title)
      await expect(page).toHaveTitle("google")      //assertion expected=actual
})