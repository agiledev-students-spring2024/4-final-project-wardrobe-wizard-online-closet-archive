// items.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const mockdb = require('./mockdb');

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     let category = req.body.category.toLowerCase();
//     category = category.replace(/\//g, ''); // Remove any slashes to prevent directory traversal attacks
//     const validCategories = ['shirts', 'pants', 'skirts', 'jackets', 'shoes', 'accessories'];
//     if (validCategories.includes(category)) {
//       const uploadDir = path.join(__dirname, '../public', category); // Modify to match your directory structure
//       cb(null, uploadDir);
//     } else {
//       cb(new Error('Invalid category'), false); // Handle invalid category
//     }
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp + original file extension
//   }
// });

// const upload = multer({ storage: storage });


  
  router.post('/additem', upload.single('picture'), (req, res) => {
    const { name, brand, color, type, category } = req.body;
    const picturePath = req.file ? req.file.path : '';
    const newItem = {
      name,
      brand,
      category,
      color,
      type, 
      img: picturePath 
    };
    if (mockdb[category.toLowerCase()]) {
      mockdb[category.toLowerCase()].push(newItem);
      res.status(200).json(newItem);
    } else {
      res.status(400).json({ error: 'Invalid category' });
    }
  });
  
  module.exports = router;
  