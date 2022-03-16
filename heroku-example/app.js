//console.log("hello");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 1337; //1st part is very needed here, I will show later.


// middleware for json
app.use(express.json());


// serve frontend
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log('App is running on port ' + PORT);
});