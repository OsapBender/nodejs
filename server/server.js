const express = require("express");
const cors = require('cors');
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

const publicPath = path.join(__dirname, "../build");
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

const users = [{username: 'admin', password: '123'}];
const corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use('/auth', express.static(publicPath));

// eslint-disable-next-line consistent-return
app.post('/signin', (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const {username} = req.body;
    const {password} = req.body;
    // eslint-disable-next-line no-restricted-syntax
    for (const user of users) {
        if (user.username === username && user.password === password) {
            return res.send(true);
        }
    }
    res.send(false);
});

app.all("/*", (req, res) => res.sendStatus(404));

server.listen(port, () => console.log("Сервер запущен на порте " + port));
