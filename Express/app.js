const express = require('express');

const app = express(); // This means that it creates an instance of Express

app.use(express.json()); // use is a middleware, meaning it is a function that connects to your Express app, in the whole app
//Express.json() makes it so that you can read json.
// Json is array with objects in the "database"


// All you need to make a server, in browser open: http://127.0.0.1:1337/

// endpoint using REST API verbs
// request and response to the server
app.get('/', (req, res) => {
    const html = `<h1> Hello, cool eh? </h1>`;
    res.send(html);
}); // get from the database





app.get('/endpoint', (req, res) => {
    const toSend = {
        msg: 'Ok',
        status: 200
    };
    res.json(toSend);
});


// http://127.0.0.1:1337/animal/dog
app.get('/animal/:animal', (req, res) => { //:animal is a dynamic endpoint paramter
    const x = `<h1>Your favorite animal is ${req.params.animal}</h1>`;
    res.send(x);
});

app.post('/email', (req, res) => {
    const email = req.body.email;
    res.status(200).json({
        msg: 'Email saved',
        email: 'sandra@gmail.com'
    });
});


//actively listening to the port 1337
app.listen(1337, () => {
    console.log('listening on port 1337');
});


/*
// endpoint using REST API verbs
// request and response to the server
app.get('/endpoint', (req, res) => {
    const html = `<h1> Hello, cool eh? </h1>`;
    res.send(html);
}); // get from the database

app.listen(1337, () => {
    console.log('listening on port 1337');
});
*/



/*
app.get('/'); // get from the database
app.post('/'); // upload to database    
app.delete('/'); // delete from database

app.put('/'); // update on database
app.patch('/') // like update but patch*/