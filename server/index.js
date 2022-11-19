const express = require('express');
const cors = require('cors');

const {port} = require('./config/env');

const { initializeDatabase} = require('./config/db')

const app = express()

const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`App is listening on port ${port}`));
    })
    .catch((err) => {
        console.log('Cannot connect to db:', err)
    })