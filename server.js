const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const indexRoute = require("./routes/indexRoute")
let jsonParser = bodyParser.json()

// Export mongoose
const  mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
var  uri = "mongodb+srv://chahrazad:chahrazad1998@cluster0.d4cr3k9.mongodb.net/?retryWrites=true&w=majority"

// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});

const routes = require('./routes/todoRoute'); //importing route
app.use(jsonParser)
routes(app);
//app.use('/', indexRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


