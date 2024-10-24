const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve gzipped files with the correct content encoding
app.get('*.js', (req, res, next) => {
    if (req.url.endsWith('.gz')) {
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'application/javascript');
    }
    next();
});

app.get('*.data', (req, res, next) => {
    if (req.url.endsWith('.gz')) {
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'application/octet-stream');
    }
    next();
});

app.get('*.wasm', (req, res, next) => {
    if (req.url.endsWith('.gz')) {
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'application/wasm');
    }
    next();
});

// Serve static files from the WebGL build directory
app.use(express.static(path.join(__dirname, 'WebGL-Build')));

// Serve index.html by default
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebGL-Build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
