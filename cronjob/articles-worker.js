let CronJob = require('cron').CronJob;
let getArticles = require('../crawler/vnexpress-articles');
let mysql = require('mysql');

let con = mysql.createConnection({
  host: process.env['HOST'], 
  user: process.env['MYSQL_USER'],
  password: process.env['MYSQL_PASSWORD'],
  database: 'news_development'
});

let job = new CronJob('0 * * * * *', () => {
  console.log('Getting new articles');
  getArticles().then((items) => {
    let values = '';
    items.map(article => {
      values += `("${article.title}", '${article.url}'),`;
    })
    values = values.slice(0, -1);
    console.log('Saving articles to databases')
    con.query(`INSERT INTO articles(title, url) VALUES ${values}`);
    console.log('Done getting new articles');
  });
});

module.exports = job; 
