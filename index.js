const express = require('express')
const app = express()
const port = 3000

app.get('/', (re, res) => res.send("Hello World"))

app.listen(port, () => console.log(`app running on port ${port}`))