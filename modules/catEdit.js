const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../database/cats.json');

function readCats() {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading cats:', err);
        return [];
    }
}
function writeCats(cats) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(cats, null, 2));
    } catch (err) {
        console.error('Error writing cats:', err);
    }
}
function addCat(newCat) {
    const cats = readCats();
    cats.push(newCat);
    writeCats(cats);
}
function deleteCat(name) {
    let cats = readCats();
    cats = cats.filter(cat => cat.name != name);
    writeCats(cats);
}
module.exports = {
    readCats,
    addCat,
    deleteCat
};