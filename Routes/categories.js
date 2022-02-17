const express = require('express');
const categoryService = require('./../services/category.services');
const router  = express.Router();

const service = new categoryService();

router.get('/', (req, res) => {
  const category = service.find();
  res.json(category)
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.json(category)
})

router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.json(newCategory)
})


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const update = service.update(id,body);
  res.json(update);
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const delete_ = service.delete(id);
  res.json(delete_);
})


module.exports = router;
