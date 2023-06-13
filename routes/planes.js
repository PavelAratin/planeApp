const express = require('express');
const router = express.Router();
const path = require('path');
const { getPlanes, createPlane } = require('../controllers/planes');
const multer = require('multer');

//показываем, где хранить загруженные файлы
const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage });

// @route get /api/planes - все самолеты
router.get('/', getPlanes);
// @route get /api/planes/:id - получить самолет по id
router.get('/:id', (req, res) => res.send('get single planes'));
// @route post /api/planes - создать самолет
router.post('/', upload.single('planeImage'), createPlane);

module.exports = router;