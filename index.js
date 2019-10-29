const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router()
const path = require('path');
const port = 3000;
const cors = require('cors');
const info = require('./info/info')(router)

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use('/info', info);

app.get('**', (req, res) => {
    res.json({ success: true, message: '404 Page not found' })
})
app.listen(port, (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log('connected to server on port ', port);

    }
})