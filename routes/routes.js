let Articles = require('../services/articles-service');

let appRouter = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to our restful API');
  });

  app.get('/articles', (req, res) => {
    Articles.getArticles((err, rows) => {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  app.get('/articles/:id', (req, res) => {
    Articles.getArticle(id, (err, row) => {
      if (err) {
        res.json(err);
      } else {
        res.json(row);
      }
    });
  });
}

module.exports = appRouter;
