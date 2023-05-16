const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('project'));

app.listen(port, () => console.info(`Server listening on port ${port}`))