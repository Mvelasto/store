const express = require('express');
const ProductsService = require('./../services/product.services');

const router  = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
})

router.get('/:id', (req, res) => {
  const { id } = req.params; // <-- de todos los parametros solo quiero el id
  if(id === "999"){
    res.status(404).json({
      message: "not found"
    });
  }else{
    res.status(200).json(
      {
      "id": id,
      "name": "producto 1",
      "price": 1000
      }
    );
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

/* patch y put es igual solo q patch puede actualizar parametros de foma parcial
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
  res.json({
    id: id,
    message: 'update',
    data: body
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    message: 'deleted',
  })
})

module.exports = router;
