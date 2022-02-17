const express = require('express');
const ProductsService = require('./../services/product.services');

const router  = express.Router();
const service = new ProductsService();


// LISTAR
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
})

// LISTAR 1 ELEMENTO
router.get('/:id', (req, res) => {
  const { id } = req.params; // <-- de todos los parametros solo quiero el id
  const product = service.findOne(id);
  res.json(product);

})

// CREAR
router.post('/', (req, res) => {
  const body = req.body;
  const product = service.create(body);
  res.status(201).json(product);
})

/*ACTUALIZAR
* patch y put es igual solo q patch puede actualizar parametros de foma parcial
*  mientras q put debe actualizar el objeto completo
*/
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    id: id,
    message: 'actualizado',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product)
})

// BORRAR
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json(product);
})

module.exports = router;
