const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('23-Dec-2020 Hello World!...from aws@19-dec-2020.. change 5 @ 18:00'));


//app.getfor('/', (req, res) => res.send('Hello World!...from aws@19-dec-2020.. change 4 @ 11:26'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
