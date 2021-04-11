const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const testRouter = require('./routes/testroute');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
const riot_api_key = process.env.RIOT_API_KEY;

app.use(cors());
app.use(express.json());
app.use('/testRoute', require('./routes/testroute'));

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true});
const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const championsRouter = require('./routes/champions');

app.get('/', (req,res) => {
	res.json({api_key: riot_api_key})
})

app.get('/testRoute', testRouter);
app.use('/champions', championsRouter);


app.listen(port, ()=>{
	console.log('Server is running on port: ${port}');
});