const express = require("express");
const {MongoClient} = require("mongodb");
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
    origin: "http://localhost:8080"
};
let dbClient;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(publicPath));

// eslint-disable-next-line consistent-return
mongoClient.connect(function (err, client) {
    if (err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("reactChat").collection("users");
    app.listen(port, function () {
        console.log("Сервер запущен на порте " + port);
    });
});

// eslint-disable-next-line consistent-return
app.post('/getUsers', (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const {collection} = req.app.locals;
    const {value} = req.body;
    // eslint-disable-next-line consistent-return
    collection.find().toArray((err, results) => {
        if (err) return console.log(err)
        const {array} = results[0];
        let similarities = array.filter(person =>
            person.username.includes(value)
        ).map(obj => obj.username);
        res.send(similarities)
    });
});

// eslint-disable-next-line consistent-return
app.post("/signin", (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const {username} = req.body;
    const {password} = req.body;
    const {collection} = req.app.locals;

    // eslint-disable-next-line consistent-return
    collection.find({array: {username, password}}).toArray((err, users) => {
        if (err) return console.log(err);
        if (users.length > 0) {
            res.send('/chat');
            res.end();
        }
        res.end();
    });
});

app.all("/*", (req, res) => res.sendStatus(404));

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});