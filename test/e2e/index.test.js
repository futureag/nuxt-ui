// import puppeteer from 'puppeteer'
// import axios from 'axios'

// const authorizationToken = 'Bearer n7yEIaT1auq8j9XmJx5K'

// describe('index', () => {
//   beforeEach(async () => {
//     await axios({
//       method: 'POST',
//       url: 'http://localhost:3001/api/v1/users/98/reset',
//       headers: {
//         'Authorization': authorizationToken
//       }
//     })
//   })

//   test('has logo', async () => {
//     let browser = await puppeteer.launch({ headless: false })
//     let page = await browser.newPage()

//     await page.goto('http://localhost:3000/')
//     await page.waitForSelector('.navbar-item')

//     const src = await page.$eval('.navbar-item img', e => e.getAttribute('src'))
//     expect(src).toEqual(expect.stringContaining('issuer-logo.png'))

//     browser.close()
//   })

//   test('start investing button on not existing investment request', async () => {
//     let browser = await puppeteer.launch({ headless: false })
//     let page = await browser.newPage()

//     await page.goto('http://localhost:3000/')
//     await page.waitForSelector('.announcement-item')

//     const html = await page.$eval('.announcement-item .button', e => e.innerHTML)
//     expect(html).toEqual(expect.stringContaining('Start Investing'))

//     browser.close()
//   })
// })
