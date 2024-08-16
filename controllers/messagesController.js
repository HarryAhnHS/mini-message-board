const db = require('../db/queries');

module.exports = {
    getMessages: async (req, res) => {
        const messages = await db.getAllMessages();
        res.render('index.ejs', {messages: messages})
    },
    getForm: (req, res) => res.render('form.ejs'),
    postNewMessage: async (req, res) => {
        await db.postNewMessage(req.body.text, req.body.username);
        res.redirect('/');
    },
    getMessageById: async (req, res) => {
        const result = await db.getMessage(req.params.id);
        res.render("messageDetails", {message: result});
    }
}