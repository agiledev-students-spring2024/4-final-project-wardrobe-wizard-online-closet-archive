#!/usr/bin/env node

import server from './app.js' // load up the web server
const port = 3001 // the port to listen to for incoming requests
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const clothcount=18;

// call express's listen function to start listening to the port
const accounts = [
  {
    "username": "tester",
    "password": "tester"
  },
  {
    "username": "example",
    "password": "login"
  }
];

const shirts = [
  { id: 1,
    name: 'Casual Shirt', 
    brand: 'Awesome Brand', 
    type: 'Casual', 
    color: 'Blue',
    notes: 'Note 1',
    img: '/public/shirts/casual_shirt.webp'
  },
  { id: 2,
    name: 'Formal Shirt', 
    brand: 'Formal Brand', 
    type: 'Formal',
    color: 'White', 
    notes: 'Note 2',
    img: '/public/shirts/formal_shirt.webp'
  },
  { name: 'Favorite Shirt', 
    brand: 'Awesome Brand', 
    type: 'Casual', 
    color: 'Grey',
    notes: 'Note 3',
    img: '/public/shirts/favorite_shirt.webp'
  }
]

const pants = [
  { id: 3,
    name: 'Casual Pants', 
    brand: 'Awesome Brand', 
    type: 'Casual', 
    color:'Orange',
    notes: 'Note 1',
    img: '/public/pants/brown_pants.webp'
  },
  { id: 4,
    name: 'Least Favorite Pants', 
    brand: 'Fake Brand 3', 
    type: 'Casual', 
    color: 'Brown',
    notes: 'Note 2',
    img: '/public/pants/extra_pants.jpg'
  },
  { id: 5,
    name: 'Favorite Pants', 
    brand: 'Cool Brand', 
    type: 'Casual', 
    color: 'Grey',
    notes: 'Note 3',
    img: '/public/pants/comfy.webp'
  }
]

const skirts = [
  { id: 6,
    name: 'Best Dress', 
    brand: 'Awesome Brand', 
    type: 'Formal', 
    color: 'Emerald Green',
    notes: 'Note 1',
    img: '/public/skirts/skirt_1.webp'
  },
  { id: 7,
    name: 'Least Favorite Dress', 
    brand: 'Fake Brand 170', 
    type: 'Formal', 
    color: 'Blue',
    notes: 'Note 2',
    img: '/public/skirts/skirt_2.webp'
  },
  { id: 8,
    name: '2nd Favorite Dress', 
    brand: 'Cool Brand', 
    type: 'Formal', 
    color: 'Pink',
    notes: 'Note 3',
    img: '/public/skirts/skirt_3.webp'
  }
]

const jackets = [
    { id: 9,
      name: 'Ugly Jacket', 
      brand: 'Awful Brand', 
      type: 'Casual', 
      color: 'Green',
      notes: 'Note 1',
      img: '/public/jackets/jacket_1.jpg'
    },
    { 
      id: 10,
      name: 'Coolest Jacket', 
      brand: 'Fake Brand 170', 
      type: 'Formal', 
      color: 'White',
      notes: 'Note 2',
      img: '/public/jackets/jacket_2.jpg'
    },
    { id: 11,
      name: 'Okay Jacket', 
      brand: 'Cool Brand', 
      type: 'Casual', 
      color: 'Blue',
      notes: 'Note 3',
      img: '/public/jackets/jacket_3.webp'
    }
]

const shoes = [
  { id: 12,
    name: 'Nice Shoes', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Black',
      notes: 'Note 1',
      img: '/public/shoes/shoes_1.avif'
    },
    { id: 13,
      name: 'Decent Shoes', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Black',
      notes: 'Note 2',
      img: '/public/shoes/shoes_2.webp'
    },
    { id: 14,
      name: 'Okay Shoes', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Grey',
      notes: 'Note 3',
      img: '/public/shoes/shoes_3.webp'
    }
]

const accessories = [
   { id: 15,
    name: 'Most Expensive', 
      brand: 'Cheap-O', 
      type: 'Formal', 
      color: 'Gold',
      notes: 'Note 1',
      img: '/public/accessories/accessory_1.jpg'
    },
    { id: 16,
      name: 'Best Accessory', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Black',
      notes: 'Note 2',
      img: '/public/accessories/accessory_2.jpg'
    },
    { id: 17,
      name: 'Pretty Cool', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Silver',
      notes: 'Note 3',
      img: '/public/accessories/accessory_3.webp'
    }
]

const outfits = [
  {
    outfitName: 'Business Casual Look',
    notes: 'A comfortable yet professional look for everyday business.',
    items: [
      {
        name: 'Formal Shirt',
        brand: 'Formal Brand',
        type: 'Formal',
        color: 'White',
        img: '/public/shirts/formal_shirt.webp',
      },
      {
        name: 'Favorite Pants',
        brand: 'Cool Brand',
        type: 'Casual',
        color: 'Grey',
        img: '/public/pants/comfy.webp',
      },
      {
        name: 'Decent Shoes',
        brand: 'Definitely Awesome',
        type: 'Casual',
        color: 'Black',
        img: '/public/shoes/shoes_2.webp',
      },
      {
        name: 'Best Accessory',
        brand: 'Definitely Awesome',
        type: 'Casual',
        color: 'Black',
        img: '/public/accessories/accessory_2.jpg',
      }
    ],
  },
  {
    outfitName: 'Summer Vibes',
    notes: 'Perfect for the beach or a sunny day in the park.',
    items: [
      {
        name: 'Casual Shirt',
        brand: 'Awesome Brand',
        type: 'Casual',
        color: 'Blue',
        img: '/public/shirts/casual_shirt.webp',
      },
      {
        name: 'Casual Pants',
        brand: 'Awesome Brand',
        type: 'Casual',
        color: 'Orange',
        img: '/public/pants/brown_pants.webp',
      },
      {
        name: 'Nice Shoes',
        brand: 'Definitely Awesome',
        type: 'Casual',
        color: 'Black',
        img: '/public/shoes/shoes_1.avif',
      },
      {
        name: 'Pretty Cool',
        brand: 'Definitely Awesome',
        type: 'Casual',
        color: 'Silver',
        img: '/public/accessories/accessory_3.webp',
      }
    ],
  },
  {
    outfitName: 'Evening Elegance',
    notes: 'Elegant attire for dinner parties or a night out.',
    items: [
      {
        name: '2nd Favorite Dress',
        brand: 'Cool Brand',
        type: 'Formal',
        color: 'Pink',
        img: '/public/skirts/skirt_3.webp',
      },
      {
        name: 'Coolest Jacket',
        brand: 'Fake Brand 170',
        type: 'Formal',
        color: 'White',
        img: '/public/jackets/jacket_2.jpg',
      },
      {
        name: 'Okay Shoes',
        brand: 'Definitely Awesome',
        type: 'Casual',
        color: 'Grey',
        img: '/public/shoes/shoes_3.webp',
      },
      {
        name: 'Most Expensive',
        brand: 'Cheap-O',
        type: 'Formal',
        color: 'Gold',
        img: '/public/accessories/accessory_1.jpg',
      }
    ],
  },
];


server.post('/login', (req,res) => {
  const loginSuccessful = {
    'loggedIn': true
  };
  const loginUnsuccessful = {
    'loggedIn': false
  };
  
  console.log("login: ", req.body)
  for(let i = 0; i < accounts.length; i++){
    // console.log(req.body.username, req.body.password);
    if(req.body.username == accounts[i].username){
      if(req.body.password == accounts[i].password){
        return res.json(loginSuccessful);
      }
    }
  }
  return res.json(loginUnsuccessful);

})

server.post('/register', (req,res) => {  
  console.log("register:", req.body)
  for(let i = 0; i < accounts.length; i++){
    // console.log(req.body.username, req.body.password);
    if(req.body.username == accounts[i].username){
      return res.json({'message':'Username taken. Please choose a different one','created': false})
    }
  }
  accounts.push(
    { "username": req.body.username,
      "password": req.body.password
    })
  return res.json({'message':'Account created','created': true})
})

server.get('/shirts', (req,res) =>{
  return res.json(shirts);
})

server.get('/pants', (req,res) => {
  return res.json(pants);
})

server.get('/skirts', (req,res) => {
  return res.json(skirts);
})

server.get('/jackets', (req,res) => {
  return res.json(jackets);
})

server.get('/shoes', (req,res) => {
  return res.json(shoes);
})

server.get('/accessories', (req,res) => {
  return res.json(accessories);
})

server.get('/outfits', (req, res) => {
  return res.json(outfits);
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

server.get('/item-detail/:itemName', (req, res) => {
  try {
    const { itemName } = req.params;
    const decodedName = decodeURIComponent(itemName); // Make sure to decode the URI component
    const item = findItemByName(decodedName);

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
    const category = req.body.category.toLowerCase();
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

server.post('/additem', upload.single('picture'), (req, res) => {
  // construct the new item object with the file path
  const { name, brand, color, type, category } = req.body;
  const newItem = {
    id: clothcount++,
    name,
    brand,
    type,
    category,
    color,
    img: req.file ? `/public/${category.toLowerCase()}/${req.file.filename}` : null // Relative path from public
  };
  if (!name || !brand || !color || !type || !category) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  // add to the correct in-memory array based on type
  switch (category.toLowerCase()) {
    case 'accessories':
      accessories.push(newItem);
      break;
    case 'jackets':
      jackets.push(newItem);
      break;
    case 'pants':
      pants.push(newItem);
      break;
    case 'shirts':
      shirts.push(newItem);
      break;
    case 'shoes':
      shoes.push(newItem);
      break;
    case 'skirts':
      skirts.push(newItem);
      break;
    default:
      return res.status(400).json({ message: 'Invalid item type' });
  }

  res.json({ message: 'Item added successfully', item: newItem });
});

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

