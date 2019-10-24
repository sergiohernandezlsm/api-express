const express = require('express');
const app = express();
const routesUsers = require('./src/routes/users');
const routesCars = require('./src/routes/cars');


app.use(express.json());
app.use('/api', routesUsers);
app.use('/api', routesCars);

app.listen(3000, () => console.log('users API listening on port 3000!'));

