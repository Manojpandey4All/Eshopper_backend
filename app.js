const express = require('express');
const dotenv= require('dotenv');
const app = express()
const cors = require('cors')
const fileupload = require('express-fileupload');

dotenv.config();
app.use(fileupload());
app.use(express.json());
app.use(express.urlencoded());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions));
app.use(express.static("upload"))
console.log("port num",process.env.PORT)
const port= parseInt(process.env.PORT);

app.use('/',require('./routes/productrouter'));
app.use('/user',require('./routes/userrouter'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
