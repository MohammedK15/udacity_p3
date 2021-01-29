// Setup empty JS object to act as endpoint for all routes
const projectData = [];
// Express to run server and routes
const express = require('express');
const app = express();

// Start up an instance of app

/* Dependencies */
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
// Callback to debug
const port = 333;
const server = app.listen(port, checkBack);

function checkBack(){
    console.log("server running at port: " + port);
}
// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    console.log('GET request call');
    console.log(projectData[projectData.length - 1])
    res.json(
        {
            status: 'success',
            data: projectData[projectData.length - 1],
            message: 'retrieved data',
        }
    )
});
// Post Route
app.post('/send', (req, res) => {
    console.log('POST request call');
    // const tmpData = {
    //     temp: req.temp,
    //     date: req.date,
    //     userFeel: req.userFeel,
    // };
    // console.log(req.body);
    // console.log('---------------');

    console.log(projectData);

    projectData.push(req.body);
    console.log(projectData);

    res.send(projectData);
})