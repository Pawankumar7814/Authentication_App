// Import modules
const express = require('express');
const app = express(); // Creating an express application



app.listen(port, function(err) {
    if (err) {
        console.log(`Server is not started yet because of ${err}`);
    }
    console.log(`Server is running on ${port}`);
})