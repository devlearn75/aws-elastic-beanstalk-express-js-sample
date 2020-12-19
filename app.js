const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!...from aws@19-dec-2020.. change 3 @ 11:21'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
