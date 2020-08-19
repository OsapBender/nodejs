// const bodyParser = require('body-parser');
//
// const users = [{
//     id: 1,
//     name: "Richard Hendricks",
//     email: "richard@piedpiper.com",
// },
//     {
//         id: 2,
//         name: "Bertram Gilfoyle",
//         email: "gilfoyle@piedpiper.com",
//     },
// ];
//
// const urlencodedParser = bodyParser.urlencoded({extended: false});
//
// const router = app => {
//     app.get('/', (request, response) => response.sendFile("C:/Users/ivan0/Desktop/web/my projects/nodejs/index.html"));
//     app.get('/users', (request, response) => {
//         response.send(users);
//     });
//     app.post("/submit", urlencodedParser, (request, response) => {
//         if(!request.body) return response.sendStatus(400);
//         console.log(request.body);
//         response.send(`${request.body.firstNumber} - ${request.body.secondNumber}`);
//     });
// };
//
// module.exports = router;
