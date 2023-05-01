//import json server
const jsonSever = require("json-server");

//create a json server app
const server = jsonSever.create();

//setuppath for db.json
const router = jsonSever.router("db.json");

//return middleware used by json server
const middleware = jsonSever.defaults();

//set up port
const port = process.env.PORT || 4000;

//use router, middleware in server
server.use(middleware);
server.use(router);

//applisten
server.listen(port, () => {
  console.log(`Json server started at port ${port}`);
});
