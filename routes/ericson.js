var express = require = require('express');
var router = express.Router();

const EricsonController = require('../controller/ericson');
const ericson = require('../model/ericson');

router.post('/', EricsonController.createEricson);

module.exports = router;