const express = require('express');
// const bodyParser = require('body-parser');


const {ServerConfig} = require('./config');
const apiRoutes = require('./routes');
 
const app = express();
// app.use is going to register the middleware for all the upcoming routes
app.use(express.json());  // express.json return the middleware that only passes json and only looks at the request where the content header matches the  json
app.use(express.urlencoded({extended: true}))

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT , () => {
    console.log(`Successfully started the server on the PORT: ${ServerConfig.PORT}`);  
});
