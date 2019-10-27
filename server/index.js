const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req, res) => {
    res.send('Hello Worlds!')
})


app.use('/api', movieRouter)


// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



// start server on the specified port, binding host
app.listen(apiPort, function () {
    console.log("server starting on " + apiPort);
});