async function getArticleDetail(url) { 
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto(url, { waitUntil: 'networkidle2' });
    const detailArticle = page.evaluate(() => {
        let descriptionLink = document.querySelectorAll('p.description');
        let contentLinks = document.querySelectorAll('article.fck_detail > p.Normal')
        let description = descriptionLink[0].innerText;
        let content = [...contentLinks].map(link => link.innerText);

        return {
            description: description,
            content: content
        };
    });

    return article.detail = detailArticle;
};

module.exports = getArticleDetail;

