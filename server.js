const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); // To use _method to specify method
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

// app.use(methodOverride('_method'));

// Using cokie parser, so that it can parse the cookie it is used in session,
app.use(cookieParser());

// Using express-sessions ...
app.use(session({ secret: "Some secret" })); //Some secret should be replaced with some real word ...

// Making a public folder ...
app.use(express.static(__dirname + '/public'));

// Using a View engine ...
app.set('view engine', 'pug');
app.set('views','./views');

// Using Global Router ...
const { AppRouter } = require('./routes/AppRouter');
// To use session variable in jade ...
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

app.use('/', AppRouter);

// Using Global Error Handler...
app.use(function(err, req, res, next) {
  console.log(err);
  res.end('Global error handler', err);
  next();
});

app.listen(3000, () => { console.log('Listing to port 3000');});