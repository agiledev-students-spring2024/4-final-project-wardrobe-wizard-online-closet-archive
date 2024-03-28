#!/usr/bin/env node

const server = require("./app") // load up the web server

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
    img: '/public/casual_shirt.webp'
  },
  { name: 'Formal Shirt', 
    brand: 'Formal Brand', 
    type: 'Formal', 
    img: '/public/formal_shirt.webp'
  },
  { name: 'Favorite Shirt', 
    brand: 'Awesome Brand', 
    type: 'Casual', 
    img: '/public/favorite_shirt.webp'
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
  console.log('shirt get reuqest receievd');
  return res.json(shirts)
})

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