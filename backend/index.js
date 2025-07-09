const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json({limit: "25mb"}));
app.use((express.urlencoded({limit: "25mb"})));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173/', 
  credentials: true,
}));

main().then(()=> console.log("mongoDB is successfully connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})