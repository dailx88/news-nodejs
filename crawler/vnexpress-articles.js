const puppeteer = require('puppeteer');

async function getArticles() {
    console.log('***BEGIN GETTING ARTICLES***');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://vnexpress.net/', { waitUntil: 'load', timeout: 0 } );
    
    const articles = await page.evaluate(() => {
        let titleLinks = document.querySelectorAll('h3.title-news > a');
        titleLinks = [...titleLinks];
        let items = titleLinks.map(link => (
            {
                title: link.getAttribute('title'),
                url: link.getAttribute('href')
            }
        ));

        return [...items];
    });

    console.log('***DONE --> CLOSING SCRIPT***');
    console.log('***RESULT***');
    console.log(articles);
    await browser.close();
    return articles
};

module.exports = getArticles;
