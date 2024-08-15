const { v4: uuidv4 } = require('uuid'); // Import the UUID library

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

module.exports = {
    getMessages: (req, res) => res.render('index.ejs', {messages: messages}),
    getForm: (req, res) => res.render('form.ejs'),
    postNewMessage: (req, res) => {
        messages.push({
            id: uuidv4(),
            text: req.body.text,
            user: req.body.user,
            added: new Date(),
        });
        res.redirect('/');
    },
    getMessageById: (req, res) => {
        const display = messages.find((m) => m.id === req.params.id);
        res.render("messageDetails", {message: display});
    }
}