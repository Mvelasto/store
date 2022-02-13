const express = require('express');
/**************************/
/**ADMINISTRADOR DE RUTAS**/
/**************************/
const productRouter = require('./products');
const categoriesRouter = require('./categories');
const userRouter = require('./users');
const homeRouter = require('./home');

function routerApi(app){
  const router = express.Router();
  app.use('api/v1', router);
  app.use('/products', productRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users', userRouter);
  app.use('/home', homeRouter);
}


module.exports = routerApi;
