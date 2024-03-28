#!/usr/bin/env node

const server = require("./app") // load up the web server
//const mockdb = require('./mockdb'); // load mock database
const { mockdb, findItemByName } = require('./mockdb');
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
  return res.json(mockdb.shirts);
})

server.get('/pants', (req,res) => {
  return res.json(mockdb.pants);
})

server.get('/skirts', (req,res) => {
  return res.json(mockdb.skirts);
})

server.get('/jackets', (req,res) => {
  return res.json(mockdb.jackets);
})

server.get('/shoes', (req,res) => {
  return res.json(mockdb.shoes);
})

server.get('/accessories', (req,res) => {
  return res.json(mockdb.accessories);
})

server.get('/item-detail/:itemName', (req, res) => {
  try {
    const { itemName } = req.params;
    const decodedItemName = decodeURIComponent(itemName);
    const item = findItemByName(decodedItemName);
    
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    console.error("Server error: ", error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

// a function to stop listening to the port
const close = () => {
  listener.close()
}

module.exports = {
  close: close,
}