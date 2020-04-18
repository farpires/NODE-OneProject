const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/',routes() );

//elegimos puerto para la practica del proyecto
app.listen(3000);

