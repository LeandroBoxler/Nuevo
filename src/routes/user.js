var express = require('express');
const {login} = require('../controllers/user/login');


var router = express.Router();


/* GET home page. */
router.get('/login', login);


module.exports = router;
