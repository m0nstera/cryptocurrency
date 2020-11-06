const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser
app.use(cors());

// If you had to handle requests on the server side, this is where that would occur
// app.get('/', (req, res) => {
// 		// Handle the request
// 		// -- Could make DB queries here
// 		res.status(200).send('The server is taking requests to the products/:id endpoint');
// });

app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});