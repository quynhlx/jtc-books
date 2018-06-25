// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);
// server.listen(3000, () => {
//   console.log(`JSON Server is running on port: 3000`);
// });

//Install express server
const express = require('express');
var jsonServer = require('json-server');

const app = express();
app.use('/api', jsonServer.router('db.json'));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
