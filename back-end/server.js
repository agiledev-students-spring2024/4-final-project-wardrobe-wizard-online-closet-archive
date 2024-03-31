#!/usr/bin/env node

import server from './app.js' // load up the web server
const port = 3001 // the port to listen to for incoming requests

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
  { name: 'Casual Shirt', 
    brand: 'Awesome Brand', 
    type: 'Casual', 
    color: 'Blue',
    notes: 'Note 1',
    img: '/public/shirts/casual_shirt.webp'
  },
  { name: 'Formal Shirt', 
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
  { name: 'Casual Pants', 
    brand: 'Awesome Brand', 
    type: 'Casual', 
    color:'Orange',
    notes: 'Note 1',
    img: '/public/pants/brown_pants.webp'
  },
  { name: 'Least Favorite Pants', 
    brand: 'Fake Brand 3', 
    type: 'Casual', 
    color: 'Brown',
    notes: 'Note 2',
    img: '/public/pants/extra_pants.jpg'
  },
  { name: 'Favorite Pants', 
    brand: 'Cool Brand', 
    type: 'Casual', 
    color: 'Grey',
    notes: 'Note 3',
    img: '/public/pants/comfy.webp'
  }
]

const skirts = [
  { name: 'Best Dress', 
    brand: 'Awesome Brand', 
    type: 'Formal', 
    color: 'Emerald Green',
    notes: 'Note 1',
    img: '/public/skirts/skirt_1.webp'
  },
  { name: 'Least Favorite Dress', 
    brand: 'Fake Brand 170', 
    type: 'Formal', 
    color: 'Blue',
    notes: 'Note 2',
    img: '/public/skirts/skirt_2.webp'
  },
  { name: '2nd Favorite Dress', 
    brand: 'Cool Brand', 
    type: 'Formal', 
    color: 'Pink',
    notes: 'Note 3',
    img: '/public/skirts/skirt_3.webp'
  }
]

const jackets = [
    { name: 'Ugly Jacket', 
      brand: 'Awful Brand', 
      type: 'Casual', 
      color: 'Green',
      notes: 'Note 1',
      img: '/public/jackets/jacket_1.jpg'
    },
    { name: 'Coolest Jacket', 
      brand: 'Fake Brand 170', 
      type: 'Formal', 
      color: 'White',
      notes: 'Note 2',
      img: '/public/jackets/jacket_2.jpg'
    },
    { name: 'Okay Jacket', 
      brand: 'Cool Brand', 
      type: 'Casual', 
      color: 'Blue',
      notes: 'Note 3',
      img: '/public/jackets/jacket_3.webp'
    }
]

const shoes = [
  { name: 'Nice Shoes', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Black',
      notes: 'Note 1',
      img: '/public/shoes/shoes_1.avif'
    },
    { name: 'Decent Shoes', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Black',
      notes: 'Note 2',
      img: '/public/shoes/shoes_2.webp'
    },
    { name: 'Okay Shoes', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Grey',
      notes: 'Note 3',
      img: '/public/shoes/shoes_3.webp'
    }
]

const accessories = [
   { name: 'Most Expensive', 
      brand: 'Cheap-O', 
      type: 'Formal', 
      color: 'Gold',
      notes: 'Note 1',
      img: '/public/accessories/accessory_1.jpg'
    },
    { name: 'Best Accessory', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Black',
      notes: 'Note 2',
      img: '/public/accessories/accessory_2.jpg'
    },
    { name: 'Pretty Cool', 
      brand: 'Definitely Awesome', 
      type: 'Casual', 
      color: 'Silver',
      notes: 'Note 3',
      img: '/public/accessories/accessory_3.webp'
    }
]

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


// a function to stop listening to the port
const close = () => {
  listener.close()
}
export {close}