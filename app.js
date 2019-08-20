const express = require('express');                                             
const app = express();

const pug = require('pug');




// Setting view Engine to pug.
app.set('view engine', 'pug');


// Setting up static route
app.use('/static', express.static('public'));







// Starting server
app.listen(3000, () =>
  console.log('App listening on port 3000!'),
);