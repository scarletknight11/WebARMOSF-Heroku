const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the WebGL build directory
app.use(express.static(path.join(__dirname, 'WebGL-Build')));

// Default route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebGL-Build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
