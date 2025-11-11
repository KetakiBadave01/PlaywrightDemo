const{test,expect}=require('@playwright/test')
test("My First Test",async function({page}) {
    
    expect(12).toBe(12)
})

test.skip("My Second Test",async function({page}){
    expect(100).toBe(101)
})


test("My Third Test",async function({page}){
    expect(2.0).toBe(2.0)
})

test("My fourth Test",async function({page}){
    expect("Ketaki Badave").toContain("Ketaki")
    expect(true).toBeTruthy()
})

test("My fifth Test",async function({page}){
    expect(false).toBeFalsy()
})

test("My sixth Test",async function({page}){
    expect("Ketaki Badave".includes("Badave")).toBeTruthy()
    
})