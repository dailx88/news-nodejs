const getArticles = require('./crawler/vnexpress-articles');
const getArticleDetail = require('./crawler/vnexpress-article-detail');

console.log('begin');
let articles = getArticles();

// articles.map(article => {
//     let article_detail = getArticleDetail(article.url);
//     console.log('------------------------------------');
//     console.log(article_detail);
//     console.log('------------------------------------');
// });
