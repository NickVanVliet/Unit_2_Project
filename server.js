const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/pages/newCat.html');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});