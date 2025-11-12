const {test,expect}=require('@playwright/test')

test("Valid Login",async function({page}){
    // Maximize the browser window
  //await page.setViewportSize({ width: 1920, height: 1080 });
  
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
// Scroll slightly
  await page.evaluate(() => window.scrollBy(0, 200));
    await page.getByLabel('username').fill('student')
    await page.getByLabel('password').fill('Password123')
    await page.locator("//button[text()='Submit']").click()
  //   await page.screenshot({ path: 'screenshot.png', fullPage: true });  //screenshot
    await page.waitForTimeout(5000)    //wait for 5 sec

    await expect(page).toHaveURL(/logged-in-successfully/);
    console.log("Login successful...");

     await page.waitForTimeout(5000) 
     await page.locator("//a[text()='Home']").click()

     await page.waitForTimeout(5000) 

     await page.goBack();

     await page.locator("//a[text()='Log out']").click();

     await expect(page).toHaveURL(/practice-test-login/)
     console.log("Logout Successful");
 

})