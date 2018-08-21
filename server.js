const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('./public'));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require('./controllers/burgers_controller');

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log(`The server has started on http://localhost:${PORT}.`);
});