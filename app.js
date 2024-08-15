var express = require('express');
const path = require('path');
var app = express();
const { v4: uuidv4 } = require('uuid'); // Import the UUID library

const PORT = 3000;

const messages = [
    {
        id: uuidv4(),
        text: "Hi there!",
        user: "Harry",
        added: new Date()
    },
    {
        id: uuidv4(),
        text: "Add new messages by clicking the button below!",
        user: "Harry",
        added: new Date()
    },
    {
        id: uuidv4(),
        text: "You can also see message details if you click the message",
        user: "Jo",
        added: new Date()
    }
];

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index.ejs', {messages: messages})
}) 

app.get('/new', (req, res) => {
    res.render('form.ejs');
});

app.post('/new', (req,res) => {
    messages.push({
        id: uuidv4(),
        text: req.body.text,
        user: req.body.user,
        added: new Date(),
    });

    res.redirect('/');
})

app.get('/:id', (req, res) => {
    const display = messages.find((m) => m.id === req.params.id);
    res.render("messageDetails", {message: display});
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/ !`);
})