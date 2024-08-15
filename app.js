var express = require('express');
const path = require('path');
var app = express();

const PORT = 3000;

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

app.use(express.static(path.join(__dirname, 'public')))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index.ejs', {messages: messages})
}) 

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/ !`);
})