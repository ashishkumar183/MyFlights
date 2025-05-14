const express = require('express');
// const bodyParser = require('body-parser');


const {ServerConfig} = require('./config');
const apiRoutes = require('./routes');

const db = require('./models/index');
const {City,Airport} = require('./models/index');
// const {Airplanes} = require('./models/index');

// const sequelize = require('sequelize');
const city = require('./models/city');

const app = express();
// app.use is going to register the middleware for all the upcoming routes
app.use(express.json());  // express.json return the middleware that only passes json and only looks at the request where the content header matches the  json
app.use(express.urlencoded({extended: true}))

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT , async () => {
    console.log(`Successfully started the server on the PORT: ${ServerConfig.PORT}`);  
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter: true});
    }
    // await Airplane.create({
    //     modelNumber: 'Bombardier CRJ'
    // });
    // const city = await City.findOne({
    //     where: {
    //         id: 5
    //     }
    // });
    // const airports = await city.getAirports();
    // console.log(city,airports)
});
