const path = require('path');
var express = require('express');
const {usersRouter} = require('./routers/userRouter');

var app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', usersRouter);

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}/ !`);
})