const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const voitureRoute = require('./routes/voiture');

app.use(bodyParser.json());

app.use('/voiture', voitureRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
