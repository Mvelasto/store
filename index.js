/* preparo una constante con las propiedades de express, y defino el puerto */
const express = require('express');
const routerApi = require('./Routes')
const { logHandler, errorHandler } = require('./middlewares/error.handler');

const app  = express();
const port = 3000;

//midleware de express q permite manejar json q provengan del body
app.use(express.json());

routerApi(app);

app.use(logHandler);
app.use(errorHandler);

/* pongo a trabjar el puerto donde se trabajara */
app.listen(port, () => {
  console.log('mi puerto: '+ port);
})
