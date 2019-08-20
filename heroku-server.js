const express = require('express');
const path = require('path');
const pkg = require('./package.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(pkg.homepage || '/', express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`)
});
