const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const inventoryRoutes = require('./routes/inventory');
const drugRoutes = require('./routes/drug');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(inventoryRoutes);
app.use(drugRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://thili123:hospital123@hospitalmgmt.gw63c.mongodb.net/hptl?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
    
})
.then(()=>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});