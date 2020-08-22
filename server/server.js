const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const path = require("path");
// const http = require("http");
const bodyParser = require("body-parser");

const publicPath = path.join(__dirname, "../build");
const port = process.env.PORT || 3000;
const mongoClient = new MongoClient(
  "mongodb+srv://ichuvashov:9)8Af4jfwc@cluster0.dvlqq.mongodb.net/reactChat?retryWrites=true&w=majority"
);
const app = express();
// const server = http.createServer(app);

const corsOptions = {
  origin: "http://localhost:8080",
};
let dbClient;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use("/auth", express.static(publicPath));

mongoClient.connect(function(err, client) {
  if (err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("reactChat").collection("users");
  app.listen(port, function() {
    console.log("Сервер запущен на порте " + port);
  });
});

// eslint-disable-next-line consistent-return
app.post("/signin", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const { username } = req.body;
  const { password } = req.body;
  const { collection } = req.app.locals;
  const obj = {};
  obj[username] = password;
  collection.findOne(obj, function(err, users) {
    if (err) return console.log(err);
    if (users) {
      return res.send(true);
    }
  });

  res.send(false);
});

app.all("/*", (req, res) => res.sendStatus(404));

process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});
