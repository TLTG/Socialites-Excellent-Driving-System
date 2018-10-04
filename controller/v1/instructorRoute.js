//Instructor Router
var router = require('express').Router();
//Instructor Middelware
var middleware = require('../../middleware/lib/instructor');
var util = require('../../middleware/lib/util/sysAccount');
var upload = require('../../middleware/fileUploader');

router.get('/:id/eval', middleware.getEvalInst);
router.get('/stud/:id/eval', middleware.getEvalStud);
router.route('/:id/avatar')
    .post(upload.single('file'), util.uploadPic)
    .put(middleware.updateAvatar, util.uploadPic);

router.route('/')
    .post(middleware.create)
    .get(middleware.get);

router.route('/:id')
    .put(middleware.update)
    .get(middleware.get)
    .delete(middleware.delete);
router.route('/:id/:field')
    .get(middleware.get)
    .put(middleware.update);

module.exports = router;