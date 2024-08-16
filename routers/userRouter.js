const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get('/', usersController.getMessages);

usersRouter.get('/new', usersController.getForm);

usersRouter.post('/new', usersController.postNewMessage);

usersRouter.get('/:id', usersController.getMessageById);

module.exports = {
    usersRouter
}