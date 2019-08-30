const express = require('express');
const path = require('path');
const pkg = require('./package');

const app = express();
const port = process.env.PORT || 3000;
const contextPath = pkg.homepage || '/';

app.use(contextPath, express.static(path.join(__dirname, 'build')));

app.get(contextPath, (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('*', (req, res) => {
    res.redirect(contextPath);
});

app.listen(port, () => {
    console.log(`Serving application on port ${port}`)
});
