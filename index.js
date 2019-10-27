const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
require('dotenv').config();

const db = require('./server/db')
const movieRouter = require('./server/routes/movie-router')

const app = express()
const apiPort = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req, res) => {
    res.send('Hello Worlds!');

    // res.sendFile(path.join(__dirname + '/client/public/index.html'));
})


app.use('/api', movieRouter)



// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});



// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



// start server on the specified port, binding host
app.listen(apiPort, function () {
    console.log("server starting on " + apiPort);
});