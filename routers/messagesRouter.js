const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const messagesRouter = Router();

messagesRouter.get('/', messagesController.getMessages);

messagesRouter.get('/new', messagesController.getForm);

messagesRouter.post('/new', messagesController.postNewMessage);

messagesRouter.get('/:id', messagesController.getMessageById);

module.exports = {
    messagesRouter
}