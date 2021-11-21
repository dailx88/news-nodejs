let express = require('express');
let bodyParser = require('body-parser');
let routes = require('./routes/routes.js');
let mysql = require('mysql');
let getArticlesWorker = require('./cronjob/articles-worker');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

let server = app.listen(3000, function () {
  console.log('app running on port.', server.address().port);
});

let con = mysql.createConnection({
  host: process.env['HOST'], 
  user: process.env['MYSQL_USER'],
  password: process.env['MYSQL_PASSWORD'],
  database: 'news_development'
});

con.connect(function(err) {
  if (err) throw(err);
  console.log('Connected!!!');
});

getArticlesWorker.start();
