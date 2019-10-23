const express = require('express');
const app = express();
const routes = require('./src/routes/users');

app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => console.log('users API listening on port 3000!'));

