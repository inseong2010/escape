const express = require("express");
const app = express();
const PORT = 3000;

app.set('views', "./src/views");
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home/home');
});

app.listen(PORT, () => {
    console.log("Starting server");
});