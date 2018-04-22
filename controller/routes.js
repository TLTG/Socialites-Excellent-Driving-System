// route.js : This contains the routing of the server.
//Imports
var express = require('express');
var router = express.Router();

router.use('/', require('./main'));
router.use('/admin', require('./admin'));
router.use(require('../middleware/errorHandler').error404); //If page not found.
router.use(require('../middleware/errorHandler').error500); //This handles all error on requests.

//export this router to use in our server.js
module.exports = router;