const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//set static folder
//app.use(express.static(path.join(__dirname, 'Auto-Mart')));
app.get('/', (reg, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(port, () => console.log(`app running on port ${port}`));