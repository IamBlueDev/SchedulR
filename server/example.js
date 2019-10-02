const puppeteer = require('puppeteer');
const username = '684622';
const password = 'Password1';

// txtPassword 
// txtUserID

//     await page.evaluate((a, b) => {
//     document.querySelector('#ipfield').value = a;
//     document.querySelector('#b').value = b;
//     document.querySelector('#c').click();
//   }, a, b);
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.authenticate({'username': username ,'password':password})
//     page.goto('https://www.peoplestuffuk.com/WFMMCDPRD/rws/ess/ess_notice_board.jsp?mm=ESS',)

//     await page.waitForNavigation({waitUntil: 'networkidle2'});
//     await page.screenshot({path: 'example.png'});
//     console.log("test");
// //   await browser.close();
// })();

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.peoplestuffuk.com/WFMMCDPRD/rws/ess/ess_notice_board.jsp?mm=ESS',);
//     // Set input value
//         await page.evaluate((a, b) => {
//     document.querySelector('input[name="txtUserID"]').value = a;
//     document.querySelector('input[name="txtPassword"]').value = b;
//     document.querySelector('input[type="button"]').click();
//   }, username, password);


//     await page.waitForNavigation({waitUntil: 'networkidle2'});
//     const element = await page.$("table");

//     let data = await page.$$eval('td[class="schdnormal"]', tr => tr.map((td) => {
//         return td.innerHTML;
//     }))
//     let newData = [];
//     for (const key in data) {
//      data[key] = data[key].split(';');
//      if(data[key][1].length > 9){
//         newData.push(data[key][1]);
//      }
//     }
//     console.log(newData);


//     await page.screenshot({path: 'screenshot.png'});
//     await browser.close();
    
// })();

async function  test(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.peoplestuffuk.com/WFMMCDPRD/rws/ess/ess_notice_board.jsp?mm=ESS',);
    // Set input value
        await page.evaluate((a, b) => {
    document.querySelector('input[name="txtUserID"]').value = a;
    document.querySelector('input[name="txtPassword"]').value = b;
    document.querySelector('input[type="button"]').click();
  }, username, password);


    await page.waitForNavigation({waitUntil: 'networkidle2'});
    const element = await page.$("table");

    let data = await page.$$eval('td[class="schdnormal"]', tr => tr.map((td) => {
        return td.innerHTML;
    }))
    let newData = [];
    for (const key in data) {
     data[key] = data[key].split(';');
     if(data[key][1].length > 9){
        newData.push(data[key][1]);
     }
    }


    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
    return newData;
    }
returnFun();
async function returnFun(data){
    data = await test();
    console.log(data);
}