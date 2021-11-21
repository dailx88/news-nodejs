let mysql = require('mysql');
let con = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: 'Chimnon@1998',
  database: 'news_development'
});

let Articles = {
  getArticles: (callback) => {
    articles = con.query('SELECT * FROM articles ORDER BY id DESC LIMIT 50', callback);
    con.end();
    return articles;
  },
  getArticle: (id, callback) => {
    article = con.query('SELECT * FROM ARTICLES WHERE id = ?', [id], callback);
    con.end();
    return article;
  }
}

module.exports = Articles;
