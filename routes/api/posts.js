const express = require('express');
const router = express.Router();

//* @route  GET api/posts
//* @des    Test Route
//* @access Public
router.get('/',(req,res) => res.send('Posts Route'));

module.exports = router;