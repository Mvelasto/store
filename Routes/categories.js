const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('Hola soy una nueva categoria');
})

router.get('/:categoryId/product/:productId', (req, res) => {
  const { categoryId, productId} = req.params; // <-- de todos los parametros solo quiero el id
  res.json(
    {
    "id": categoryId,
    "productId": productId
    }
  );
})

module.exports = router;
