#!/usr/bin/env node

import server from './app.js' // load up the web server
const port = 3001 // the port to listen to for incoming requests
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import models from './db.js';
const {User, Clothes,Outfit } = models;

import auth from './routes/protected-content-routes.js'; // Import your protected routes



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
    res.json(shirts)


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

// server.get('/outfits', auth, (req, res) => {
//   return res.json(outfits);
// })

server.get('/outfits', auth, async (req, res) => {
  try {
    const userId = req.user.id.toString(); // Assuming user ID is in the user object
    const outfits = await Outfit.find({ user: userId }); // Fetch outfits for the user

    if (!outfits.length) {
      return res.status(404).json({ message: 'No outfits found for this user.' });
    }

    const outfitsWithImageLinks = await Promise.all(outfits.map(async (outfit) => {
      const imageLinks = await Promise.all(outfit.Clothes.map(async (item) => {
        try {
          const itemID = item._id.toString(); // Convert ObjectId to string
          const clothingItem = await Clothes.findById(itemID).select('imgLink');
          return clothingItem ? clothingItem.imgLink : null;
        } catch (error) {
          console.error('Error fetching clothing item for outfit:', error);
          return null; // Return null in case of error
        }
      }));

      const filteredImageLinks = imageLinks.filter(link => link !== null);
      return {
        outfitName: outfit.outfitName,
        imageLinks: filteredImageLinks
      };
    }));

    res.json(outfitsWithImageLinks);
  } catch (error) {
    console.error('Server error when fetching outfits:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


server.get('/verify_login', auth, (req,res) => {
  return res.json({'loggedIn': true})
})

const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

// const findItemByName = (itemName) => {
//   // Combine all items into a single array
//   const allItems = [...shirts, ...pants, ...skirts, ...jackets, ...shoes, ...accessories];

//   // Find the item by name (case-insensitive comparison)
//   const item = allItems.find(item => item.name.toLowerCase() === itemName.toLowerCase());

//   return item; // This will be the item if found, or undefined if not found
// };

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

// const findOutfitByName = (outfitName) => {
//   // Assuming you have an array of outfits
//   const outfit = outfits.find(outfit => outfit.outfitName.toLowerCase() === outfitName.toLowerCase());
//   return outfit;
// };

// server.get('/outfit-detail/:outfitName', (req, res) => {
//   try {
//     const { outfitName } = req.params;
//     const decodedName = decodeURIComponent(outfitName);
//     const outfit = findOutfitByName(decodedName);

//     if (outfit) {
//       res.json(outfit);
//     } else {
//       res.status(404).json({ message: 'Outfit not found' });
//     }
//   } catch (error) {
//     console.error('Server error when fetching outfit details:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

server.get('/outfit-detail/:outfitName', auth, async (req, res) => {
  try {
    const { outfitName } = req.params;
    const decodedName = decodeURIComponent(outfitName);
    const userId = req.user.id.toString(); // Assuming you're using the user's id stored in req.user by your authentication middleware

    // Find the outfit by name and user
    const outfit = await Outfit.findOne({
      outfitName: decodedName,
      user: userId
    }).exec();

    if (outfit) {
      res.json({ outfit, items: outfit.Clothes });
    } else {
      res.status(404).json({ message: 'Outfit not found' });
    }
  } catch (error) {
    console.error('Server error when fetching outfit details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

server.delete('/outfit-detail/:outfitName', auth, async (req, res) => {
  try {
    const decodedName = decodeURIComponent(req.params.outfitName);
    const userId = req.user.id.toString()
    const result = await Outfit.findOneAndDelete({ 
      outfitName: decodedName, 
      user: userId
    });
    if (result) {
      res.json({ message: 'Outfit deleted successfully' });
    } else {
      res.status(404).json({ message: 'Outfit not found or already deleted' });
    }
  } catch (error) {
    console.error('Server error when deleting outfit:', error);
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
// Clothes.collection.getIndexes({ full: true }).then(indexes => {
//   console.log('Indexes:', indexes);
// }).catch(console.error);

// Clothes.collection.dropIndex('id_1', function(err, result) {
//   if (err) {
//     console.log('Error in dropping index!', err);
//   } else {
//     console.log('Index dropped:', result);
//   }
// });


// POST route to save a new outfit
server.post('/generator', auth, async(req, res) => {
  try {
    const { outfitName, outfitNotes, items } = req.body;
    const newOutfit = new Outfit({
      outfitName:req.body.outfitName,
      outfitNotes:req.body.outfitNotes,
      Clothes:req.body.items,
      user: req.user.id,
    });
    
    if (!outfitName || !items || items.length === 0) {
      return res.status(400).json({ message: 'Outfit name and items are required.' });
    }
    await newOutfit.save();
    res.status(201).json({ message: 'Outfit saved successfully' });
    
  } catch ( error ) {
    res.status(500).json({ message: 'Failed to add outfit', error: error });
  }

  
});

server.post('/random', auth, async(req, res) => {
  try {
    const { outfitName, outfitNotes, items } = req.body;
    const newOutfit = new Outfit({
      outfitName:req.body.outfitName,
      outfitNotes:req.body.outfitNotes,
      Clothes:req.body.items,
      user: req.user.id,
    });
    
    if (!outfitName || !items || items.length === 0) {
      return res.status(400).json({ message: 'Outfit name and items are required.' });
    }
    await newOutfit.save();
    res.status(201).json({ message: 'Outfit saved successfully' });
    
  } catch ( error ) {
    res.status(500).json({ message: 'Failed to add outfit', error: error });
  }
  
});


// a function to stop listening to the port
const close = () => {
  listener.close()
}
export {close}

