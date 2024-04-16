#!/usr/bin/env node

import server from './app.js' // load up the web server
const port = 3001 // the port to listen to for incoming requests
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import models from './db.js';
const {User, Clothes } = models;

import auth from './routes/protected-content-routes.js'; // Import your protected routes


// let clothcount=18;

// // call express's listen function to start listening to the port
// const accounts = [
//   {
//     "username": "tester",
//     "password": "tester"
//   },
//   {
//     "username": "example",
//     "password": "login"
//   }
// ];

// const shirts = [
//   { id: 1,
//     name: 'Casual Shirt', 
//     brand: 'Awesome Brand', 
//     type: 'Casual', 
//     color: 'Blue',
//     notes: 'Note 1',
//     img: '/public/shirts/casual_shirt.webp'
//   },
//   { id: 2,
//     name: 'Formal Shirt', 
//     brand: 'Formal Brand', 
//     type: 'Formal',
//     color: 'White', 
//     notes: 'Note 2',
//     img: '/public/shirts/formal_shirt.webp'
//   },
//   { id: 18,
//     name: 'Favorite Shirt', 
//     brand: 'Awesome Brand', 
//     type: 'Casual', 
//     color: 'Grey',
//     notes: 'Note 3',
//     img: '/public/shirts/favorite_shirt.webp'
//   }
// ]

// const pants = [
//   { id: 3,
//     name: 'Casual Pants', 
//     brand: 'Awesome Brand', 
//     type: 'Casual', 
//     color:'Orange',
//     notes: 'Note 1',
//     img: '/public/pants/brown_pants.webp'
//   },
//   { id: 4,
//     name: 'Least Favorite Pants', 
//     brand: 'Fake Brand 3', 
//     type: 'Casual', 
//     color: 'Brown',
//     notes: 'Note 2',
//     img: '/public/pants/extra_pants.jpg'
//   },
//   { id: 5,
//     name: 'Favorite Pants', 
//     brand: 'Cool Brand', 
//     type: 'Casual', 
//     color: 'Grey',
//     notes: 'Note 3',
//     img: '/public/pants/comfy.webp'
//   }
// ]

// const skirts = [
//   { id: 6,
//     name: 'Best Dress', 
//     brand: 'Awesome Brand', 
//     type: 'Formal', 
//     color: 'Emerald Green',
//     notes: 'Note 1',
//     img: '/public/skirts/skirt_1.webp'
//   },
//   { id: 7,
//     name: 'Least Favorite Dress', 
//     brand: 'Fake Brand 170', 
//     type: 'Formal', 
//     color: 'Blue',
//     notes: 'Note 2',
//     img: '/public/skirts/skirt_2.webp'
//   },
//   { id: 8,
//     name: '2nd Favorite Dress', 
//     brand: 'Cool Brand', 
//     type: 'Formal', 
//     color: 'Pink',
//     notes: 'Note 3',
//     img: '/public/skirts/skirt_3.webp'
//   }
// ]

// const jackets = [
//     { id: 9,
//       name: 'Ugly Jacket', 
//       brand: 'Awful Brand', 
//       type: 'Casual', 
//       color: 'Green',
//       notes: 'Note 1',
//       img: '/public/jackets/jacket_1.jpg'
//     },
//     { 
//       id: 10,
//       name: 'Coolest Jacket', 
//       brand: 'Fake Brand 170', 
//       type: 'Formal', 
//       color: 'White',
//       notes: 'Note 2',
//       img: '/public/jackets/jacket_2.jpg'
//     },
//     { id: 11,
//       name: 'Okay Jacket', 
//       brand: 'Cool Brand', 
//       type: 'Casual', 
//       color: 'Blue',
//       notes: 'Note 3',
//       img: '/public/jackets/jacket_3.webp'
//     }
// ]

// const shoes = [
//   { id: 12,
//     name: 'Nice Shoes', 
//       brand: 'Definitely Awesome', 
//       type: 'Casual', 
//       color: 'Black',
//       notes: 'Note 1',
//       img: '/public/shoes/shoes_1.avif'
//     },
//     { id: 13,
//       name: 'Decent Shoes', 
//       brand: 'Definitely Awesome', 
//       type: 'Casual', 
//       color: 'Black',
//       notes: 'Note 2',
//       img: '/public/shoes/shoes_2.webp'
//     },
//     { id: 14,
//       name: 'Okay Shoes', 
//       brand: 'Definitely Awesome', 
//       type: 'Casual', 
//       color: 'Grey',
//       notes: 'Note 3',
//       img: '/public/shoes/shoes_3.webp'
//     }
// ]

// const accessories = [
//    { id: 15,
//     name: 'Most Expensive', 
//       brand: 'Cheap-O', 
//       type: 'Formal', 
//       color: 'Gold',
//       notes: 'Note 1',
//       img: '/public/accessories/accessory_1.jpg'
//     },
//     { id: 16,
//       name: 'Best Accessory', 
//       brand: 'Definitely Awesome', 
//       type: 'Casual', 
//       color: 'Black',
//       notes: 'Note 2',
//       img: '/public/accessories/accessory_2.jpg'
//     },
//     { id: 17,
//       name: 'Pretty Cool', 
//       brand: 'Definitely Awesome', 
//       type: 'Casual', 
//       color: 'Silver',
//       notes: 'Note 3',
//       img: '/public/accessories/accessory_3.webp'
//     }
// ]

// const outfits = [
//   {
//     outfitName: 'Business Casual Look',
//     notes: 'A comfortable yet professional look for everyday business.',
//     items: [
//       { id:2,
//         name: 'Formal Shirt',
//         brand: 'Formal Brand',
//         type: 'Formal',
//         color: 'White',
//         img: '/public/shirts/formal_shirt.webp',
//       },
//       { id:5,
//         name: 'Favorite Pants',
//         brand: 'Cool Brand',
//         type: 'Casual',
//         color: 'Grey',
//         img: '/public/pants/comfy.webp',
//       },
//       { id: 13,
//         name: 'Decent Shoes',
//         brand: 'Definitely Awesome',
//         type: 'Casual',
//         color: 'Black',
//         img: '/public/shoes/shoes_2.webp',
//       },
//       { id: 16,
//         name: 'Best Accessory',
//         brand: 'Definitely Awesome',
//         type: 'Casual',
//         color: 'Black',
//         img: '/public/accessories/accessory_2.jpg',
//       }
//     ],
//   },
//   {
//     outfitName: 'Summer Vibes',
//     notes: 'Perfect for the beach or a sunny day in the park.',
//     items: [
//       { id: 1,
//         name: 'Casual Shirt',
//         brand: 'Awesome Brand',
//         type: 'Casual',
//         color: 'Blue',
//         img: '/public/shirts/casual_shirt.webp',
//       },
//       { id: 3,
//         name: 'Casual Pants',
//         brand: 'Awesome Brand',
//         type: 'Casual',
//         color: 'Orange',
//         img: '/public/pants/brown_pants.webp',
//       },
//       { id:12,
//         name: 'Nice Shoes',
//         brand: 'Definitely Awesome',
//         type: 'Casual',
//         color: 'Black',
//         img: '/public/shoes/shoes_1.avif',
//       },
//       { id: 17,
//         name: 'Pretty Cool',
//         brand: 'Definitely Awesome',
//         type: 'Casual',
//         color: 'Silver',
//         img: '/public/accessories/accessory_3.webp',
//       }
//     ],
//   },
//   {
//     outfitName: 'Evening Elegance',
//     notes: 'Elegant attire for dinner parties or a night out.',
//     items: [
//       { id: 8,
//         name: '2nd Favorite Dress',
//         brand: 'Cool Brand',
//         type: 'Formal',
//         color: 'Pink',
//         img: '/public/skirts/skirt_3.webp',
//       },
//       { id:10,
//         name: 'Coolest Jacket',
//         brand: 'Fake Brand 170',
//         type: 'Formal',
//         color: 'White',
//         img: '/public/jackets/jacket_2.jpg',
//       },
//       { id:14,
//         name: 'Okay Shoes',
//         brand: 'Definitely Awesome',
//         type: 'Casual',
//         color: 'Grey',
//         img: '/public/shoes/shoes_3.webp',
//       },
//       { id:15,
//         name: 'Most Expensive',
//         brand: 'Cheap-O',
//         type: 'Formal',
//         color: 'Gold',
//         img: '/public/accessories/accessory_1.jpg',
//       }
//     ],
//   },
// ];


server.post('/login', async (req,res) => {
  const u = req.body.username;
  const p = req.body.password;
  try{
    const user = await User.findOne({ username: u });
    if(user) {
      if(user.validPassword(p)){
        const token = user.generateJWT(); // generate a signed token
        res.json({
          success: true,
          message: "User logged in successfully.",
          token: token,
          username: user.username,
          loggedIn: true
        }); 
      }
      else{
        return res.json({ 'loggedIn': false});
      }
    }
    else{
      return res.json({ 'loggedIn': false});
    }
  } catch(e) {
      console.log(e)
  }
})

server.post('/register', async (req,res) => {    
  const exists = await User.findOne({username: req.body.username});
  if(!exists){
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
   })
   try{
      const savedUser = await newUser.save();
      const token = savedUser.generateJWT();
      // res.status(201).json(savedUser);
      res.json({
        success: true,
        message: "User logged in successfully.",
        token: token,
        username: savedUser.username,
        created: true
      }); 
    } 
    catch(e){
      res.status(400).json({ message: e.message });
    }
  }
  else{
    return res.json({'message':'Username taken. Please choose a different one','created': false})
  }
})


server.get('/shirts', auth, async (req, res) => {
  try {
    const userId = req.user.id.toString();
    const shirts = await Clothes.find({ 
      user: userId, 
      articleType: 'Shirts' 
    });

    // Check if shirts array is not empty
    if (shirts.length > 0) {
      res.json(shirts);
    } else {
      // If the array is empty, it may mean no shirts were found for the user
      res.status(404).json({ message: 'No shirts found for this user.' });
    }

  } catch (error) {
    console.error('Server error when fetching shirts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.get('/pants', auth, async (req, res) => {
  try {
    const userId = req.user.id.toString();
    const pants = await Clothes.find({ 
      user: userId, 
      articleType: 'Pants' 
    });
    res.json(pants);

  } catch (error) {
    console.error('Server error when fetching pants:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.get('/skirts', auth, async (req, res) => {
  try {
    const userId = req.user.id.toString();
    const skirts = await Clothes.find({ 
      user: userId, 
      articleType: 'Skirts' 
    });
    res.json(skirts);

  } catch (error) {
    console.error('Server error when fetching skirts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.get('/jackets', auth, async (req, res) => {
  try {
    const userId = req.user.id.toString();
    const jackets = await Clothes.find({ 
      user: userId, 
      articleType: 'Jackets' 
    });
    res.json(jackets);

  } catch (error) {
    console.error('Server error when fetching jackets:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.get('/shoes', auth, async (req, res) => {
  try {
    const userId = req.user.id.toString();
    const shoes = await Clothes.find({ 
      user: userId, 
      articleType: 'Shoes' 
    });
    res.json(shoes);

  } catch (error) {
    console.error('Server error when fetching shoes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.get('/accessories', auth, async (req, res) => {
  try {
    const userId = req.user.id.toString();
    const accessories = await Clothes.find({ 
      user: userId, 
      articleType: 'Accessories' 
    });
    res.json(accessories);

  } catch (error) {
    console.error('Server error when fetching accessories:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.get('/outfits', auth, (req, res) => {
  return res.json(outfits);
})

server.get('/verify_login', auth, (req,res) => {
  return res.json({'loggedIn': true})
})

const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

const findItemByName = (itemName) => {
  // Combine all items into a single array
  const allItems = [...shirts, ...pants, ...skirts, ...jackets, ...shoes, ...accessories];

  // Find the item by name (case-insensitive comparison)
  const item = allItems.find(item => item.name.toLowerCase() === itemName.toLowerCase());

  return item; // This will be the item if found, or undefined if not found
};

// server.get('/item-detail/:itemName', (req, res) => {
//   try {
//     const { itemName } = req.params;
//     const decodedName = decodeURIComponent(itemName); // Make sure to decode the URI component
//     const item = findItemByName(decodedName);

//     if (item) {
//       res.json(item);
//     } else {
//       res.status(404).json({ message: 'Item not found' });
//     }
//   } catch (error) {
//     console.error('Server error when fetching item details:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// Update to use the Mongoose model
server.get('/item-detail/:itemName', auth, async (req, res) => {
  try {
    const { itemName } = req.params;
    const userId = req.user.id.toString();
    const decodedName = decodeURIComponent(itemName); // Make sure to decode the URI component

    const item = await Clothes.findOne({
      user: userId,
      nameItem: new RegExp(decodedName, 'i'), // Case-insensitive search
    });

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    console.error('Server error when fetching item details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.delete('/delete-item/:itemName', auth, async (req, res) => {
  try {
    const { itemName } = req.params;
    const userId = req.user.id.toString();
    const itemToDelete = await Clothes.findOneAndDelete({ 
      nameItem: itemName, 
      user: userId 
    });

    if (!itemToDelete) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item successfully deleted' });
  } catch (error) {
    console.error('Server error when deleting item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const findOutfitByName = (outfitName) => {
  // Assuming you have an array of outfits
  const outfit = outfits.find(outfit => outfit.outfitName.toLowerCase() === outfitName.toLowerCase());
  return outfit;
};

server.get('/outfit-detail/:outfitName', (req, res) => {
  try {
    const { outfitName } = req.params;
    const decodedName = decodeURIComponent(outfitName);
    const outfit = findOutfitByName(decodedName);

    if (outfit) {
      res.json(outfit);
    } else {
      res.status(404).json({ message: 'Outfit not found' });
    }
  } catch (error) {
    console.error('Server error when fetching outfit details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Set up the storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Get the type from the request body and form the path
    const category = req.body.articleType.toLowerCase();
    const dir = path.join(__dirname, 'public', category);

    // Ensure the directory exists
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // generate a unique filename to prevent overwriting existing files
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage: storage });

server.post('/additem', auth, upload.single('picture'), async(req, res) => {
  
  try {
   
    const newItem = new Clothes({
      nameItem: req.body.nameItem,
      brand: req.body.brand,
      type: req.body.type,
      articleType: req.body.articleType,
      color: req.body.color,
      notes: req.body.notes,
      imgLink: req.file ? `/public/${req.body.articleType.toLowerCase()}/${req.file.filename}` : null ,// Relative path from public
      user: req.user.id
    });
    
    if (!req.body.nameItem || !req.body.brand || !req.body.color || !req.body.type || !req.body.articleType) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    await newItem.save();
    res.json({ message: 'Item added successfully', item: newItem });
  } catch ( error ) {
    res.status(500).json({ message: 'Failed to add item', error: error });
  }

 
}
  
);

// POST route to save a new outfit
server.post('/generator', (req, res) => {
  const { outfitName, items } = req.body;
  if (!outfitName || !items || items.length === 0) {
    return res.status(400).json({ message: 'Outfit name and items are required.' });
  }
  outfits.push({
    outfitName,
    notes:'',
    items
  });
  res.status(201).json({ message: 'Outfit saved successfully' });
});

server.post('/random', (req, res) => {
  const { outfitName, items } = req.body;
  // Validate input
  if (!outfitName || items.length === 0) {
    return res.status(400).json({ message: 'Outfit name and items are required.' });
  }

  // Construct the new outfit object
  const newOutfit = {
    outfitName,
    notes:'',
    items,
  };

  outfits.push(newOutfit);

  // Send a success response
  res.status(201).json({ message: 'New outfit generated and saved successfully.' });
});


// a function to stop listening to the port
const close = () => {
  listener.close()
}
export {close}

