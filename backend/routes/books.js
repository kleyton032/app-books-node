const {Router} = require('express');

const router = Router();

router.get('/', (req, res)=>{

    res.json({text:'Hello word'})
});

module.exports = router;