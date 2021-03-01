const {Router} = require('express');
const router = Router();
const{renderIndex}= require('../controllers/index.comtroller')


router.get('/',renderIndex);

module.exports = router;