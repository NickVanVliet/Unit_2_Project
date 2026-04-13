const express = require('express');
const app = express();
const PORT = 3000;
const catEdit = require('./modules/catEdit');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/pages/newCat.html');
});
app.post('/new', (req, res) => {
    const newCat = {
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed
    };

    catEdit.addCat(newCat);

    res.redirect('/');
});

app.get('/delete/:name', (req, res) => {
    catEdit.deleteCat(req.params.name);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});