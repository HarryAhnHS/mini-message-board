const path = require('path');
var express = require('express');
const appController = require('./controllers/appController');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', appController.getMessages);

app.get('/new', appController.getForm);

app.post('/new', appController.postNewMessage);

app.get('/:id', appController.getMessageById);

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}/ !`);
})