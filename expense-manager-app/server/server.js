// import
const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// use port heroku sets for us, if is doesnt exist use 3000
const port = process.env.PORT || 3000;

// serve up asset from public dir on requerst
app.use(express.static(publicPath));

// for GET req on server , serve what is on 
/// public server or same thing everytime
// @param1: response object info about req
// @parama2: request object manipulate respone our express 
//           server makes to who made the http req
app.get('*', (req, res) => {
  // process unhandled requests
  res.sendFile(path.join(publicPath, 'index.html'));
});

// start up the server on port 3000
app.listen(port, () => {
  console.log('server is up');
});
