const {test,expect}=require('@playwright/test')

test("Verify Error Message",async function ({page}){
      // Maximize the browser window
  await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // Scroll slightly
  await page.evaluate(() => window.scrollBy(0, 200));
    await page.getByLabel("username").fill('student')
    await page.getByLabel("password").fill('nnjdd')
    await page.waitForTimeout(3000)    //wait for 5 sec

    await page.locator("//button[text()='Submit']").click()

    const ele=await page.locator("//div[@class='show']").textContent()
    console.log("eroor message is:"+ele);

    expect(ele.includes("invalid")).toBeTruthy()

    expect(ele.includes("Your password is invalid!")).toBeTruthy()
})