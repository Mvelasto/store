const express = require('express');
const UserService = require('./../services/users.services');
const router  = express.Router();

const service = new UserService();

/*
router.get('/', (req, res) => {
  const { limit, offset} = req.query; // <-- de todos los parametros solo quiero el id
  if(limit && offset){
      res.json(
        {
        "limit": limit,
        "offset": offset
        }
      );
  }else{
    res.send('no hay limit y offset');
  }
})
*/

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
})
// LISTAR 1 ELEMENTO
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json(user);
})

router.patch('/:id', async (req, res) => {
  // try{
    const { id } = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.json(user)
  /* }catch(error){
    message: error.message
  }*/
})

module.exports = router;
