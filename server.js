
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

const apiRoutes = require('./server/routes/mailRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', apiRoutes);



/*
We will be just defining API routes. The application will be served by Angular
 */
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);


server.listen(process.env.PORT||8080, function() {
  console.log("Node server running on http://localhost:8080");
});



module.exports = app;
