// Module dependencies
var express  = require("express"),
 http     = require("http"),
 mongoose = require("mongoose"),
 path     = require("path");
 
//  import { config } from 'dotenv';
//  config   = require("./config.json");
//  config = require('dotenv');

// load env config
// config();

require('dotenv').config()

// Mongoose settings
mongoose.Promise = global.Promise;

// Connect to MongoDB Atlas
// let connectionString = `${config.server.database.protocol}://${config.server.database.user}:${config.server.database.password}@${config.server.database.host}/${config.server.database.database}` 
// mongoose.connect(connectionString, {

mongoose.set('strictQuery', false);

// strictQuery: true

const connectionString = process.env.MONGO_URI;

// console.log(connectionString)

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("[>] Connected to MongoDB Atlas.");
}).catch(err => {
  console.log("[x] Failed to connect to MongoDB Atlas", err);
});

mongoose.connection.on("error", err => {
    console.log(`[x] MongoDB Atlas Connection Error: ${err}`);
});

// Init express
const app = express();

const port = process.env.PORT || 3000;

// View engine setup
app.set("port", port);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");
app.use(express.json());
app.use("/files", express.static("../../public"));

// app.use(config.server.publicUrl, express.static(config.server.public))

console.log("[>] Express server initialized.");

const  routers = [
  {
      "module": "./routers/index.router",
      "url": "/"
  },
  {
      "module": "./routers/subscriber.router",
      "url": "/api/subscribers"
  },
  {
      "module": "./routers/phone.router",
      "url": "/api/phones"
  }
];

// Init API routing
// for (const router of config.server.routers) {
for (const router of routers) {
  console.log(`\t > (${router.module}) -> {${router.url}}`);
  app.use(router.url, require(router.module));
}
console.log("[>] Express routers initialized."); 

// Start server
var server = http.createServer(app);

server.listen(app.get("port"), () => {
  console.log(`[>] Server running on port: http://localhost:` + port);
  console.log("━━━━━━━━━━━━━━━━━━━ Runtime logs ━━━━━━━━━━━━━━━━━━━");
});