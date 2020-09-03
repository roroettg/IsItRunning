const express = require('express');
const { Curl, curly } = require('node-libcurl');
const checkCertExpiration = require('check-cert-expiration');
const app = express(),
    bodyParser = require("body-parser");
port = 3080;

const users = [];

app.use(bodyParser.json());

app.get('/api/servers', async (req, res) => {
    const data = await curly.get('http://www.google.com')
    const data2 = await checkCertExpiration('google.com')
    const response = {
        statusCode: data.statusCode,
        certInfo: data2
    }
    res.json(response);
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
