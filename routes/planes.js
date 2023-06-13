const express = require('express');
const router = express.Router();
const path = require('path');
const { getPlanes } = require('../controllers/planes');

// @route get /api/planes - все самолеты
router.get('/', getPlanes);
// @route get /api/planes/:id - получить самолет по id
router.get('/:id', (req, res) => res.send('get single planes'));
// @route post /api/planes - создать самолет
router.post('/', (req, res) => res.send('create plane'));

module.exports = router;