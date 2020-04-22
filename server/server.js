const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/unidb';

const cors = require('cors');
http = require('http');

const port = 5500;

mongoose.connect(dbUrl).then(() => {
    const express = require('express');
    const app = express();
    var cors = require('cors');
    const port = 5500;

    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

    app.use((req, res) => {
        console.log(req.headers);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>This is a test server</h1></body></html>');
    })

    app.get('/about', (req, res) => {
        res.send('Hello world')
    })

    app.listen(port, () => { console.log('Server is listening on 5500...') });

}).catch(console.error)
