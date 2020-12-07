const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

app.use(express.static('../client/dist'));
app.use(express.json()); // Alternative to BodyParser
app.use(cors());

app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});