const express = require('express');
const router  = express.Router();

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

module.exports = router;
