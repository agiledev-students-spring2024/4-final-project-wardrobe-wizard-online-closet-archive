import * as chai from 'chai';
import axios from 'axios';
import '../server.js';
import chaiHttp from 'chai-http';
const { expect } = chai;


/* Navid's tests */
const serverUrl = 'http://localhost:3001/'; 

describe('GET method /shirts', async () => {
    it('returns 200', async () => {
       const res = await axios.get(`${serverUrl}shirts`);
       chai.expect(res.status).to.equal(200);
    })
})

describe('GET method /pants', async () => {
    it('returns 200', async () => {
       const res = await axios.get(`${serverUrl}pants`);
       chai.expect(res.status).to.equal(200);
    })
})

describe('GET method /skirts', async () => {
    it('returns 200', async () => {
       const res = await axios.get(`${serverUrl}skirts`);
       chai.expect(res.status).to.equal(200);
    })
})

describe('GET method /jackets', async () => {
    it('returns 200', async () => {
       const res = await axios.get(`${serverUrl}jackets`);
       chai.expect(res.status).to.equal(200);
    })
})

describe('GET method /shoes', async () => {
    it('returns 200', async () => {
       const res = await axios.get(`${serverUrl}shoes`);
       chai.expect(res.status).to.equal(200);
    })
})

describe('GET method /accessories', async () => {
    it('returns 200', async () => {
       const res = await axios.get(`${serverUrl}accessories`);
       chai.expect(res.status).to.equal(200);
    })
})
/* Navid's tests */


// Shiwen's tests
describe("Shiwen's Tests", () => {
    const serverUrl = 'http://localhost:3001/';
  
    describe('GET /outfits', () => {
      it('should get all outfits with status 200', async () => {
        const res = await axios.get(`${serverUrl}outfits`);
        chai.expect(res.status).to.equal(200);
        chai.expect(res.data).to.be.an('array');
      });
    });
  
    describe('POST /login', () => {
      it('should log in a user and return loggedIn: true', async () => {
        const loginDetails = {
          username: "tester",
          password: "tester"
        };
  
        const res = await axios.post(`${serverUrl}login`, loginDetails);
        chai.expect(res.status).to.equal(200);
        chai.expect(res.data).to.have.property('loggedIn', true);
      });
    });
  
    describe('POST /register', () => {
      it('should register a user and return a success message', async () => {
        const registrationDetails = {
          username: "newuser",
          password: "newpass"
        };
  
        const res = await axios.post(`${serverUrl}register`, registrationDetails);
        chai.expect(res.status).to.equal(200);
        chai.expect(res.data).to.have.property('message', 'Account created');
        chai.expect(res.data).to.have.property('created', true);
      });
    });
    
  });
/* Shiwen's tests */


// Ella's test
  describe('POST /generator', () =>  {
    it('should create a new outfit with the provided name and items', async () => {
      const outfit = {
        outfitName: 'Test Outfit',
        items: [
          { id: 5,
            name: 'Favorite Pants', 
            brand: 'Cool Brand', 
            type: 'Casual', 
            color: 'Grey',
            notes: 'Note 3',
            img: '/public/pants/comfy.webp'
          },
          { id: 1,
            name: 'Casual Shirt', 
            brand: 'Awesome Brand', 
            type: 'Casual', 
            color: 'Blue',
            notes: 'Note 1',
            img: '/public/shirts/casual_shirt.webp'
          },
          { id: 16,
            name: 'Best Accessory', 
            brand: 'Definitely Awesome', 
            type: 'Casual', 
            color: 'Black',
            notes: 'Note 2',
            img: '/public/accessories/accessory_2.jpg'
          }
        ],
      };

      const res = await axios.post(`${serverUrl}generator`, outfit);
      expect(res.status).to.equal(201);
      expect(res.data).to.have.property('message', 'Outfit saved successfully');
    });

    it('Missing outfit name. Return 400', async () => {
      const outfitfail = {
        outfitName: '',
        items: [
          { id: 5,
            name: 'Favorite Pants', 
            brand: 'Cool Brand', 
            type: 'Casual', 
            color: 'Grey',
            notes: 'Note 3',
            img: '/public/pants/comfy.webp'
          },
          { id: 1,
            name: 'Casual Shirt', 
            brand: 'Awesome Brand', 
            type: 'Casual', 
            color: 'Blue',
            notes: 'Note 1',
            img: '/public/shirts/casual_shirt.webp'
          },
        ],
      };

      try {
        await axios.post(`${serverUrl}generator`, outfitfail);
      } catch (error) {
        expect(error.response).to.have.property('status', 400);
        expect(error.response.data).to.have.property('message','Outfit name and items are required.');
      }
    });

  

});

describe('POST /random', () => {
  it('should generate a random outfit', async () => {
    const outfitrandom = {
      outfitName: 'Test',
      items: [
        { id: 5,
          name: 'Favorite Pants', 
          brand: 'Cool Brand', 
          type: 'Casual', 
          color: 'Grey',
          notes: 'Note 3',
          img: '/public/pants/comfy.webp'
        },
        { id: 1,
          name: 'Casual Shirt', 
          brand: 'Awesome Brand', 
          type: 'Casual', 
          color: 'Blue',
          notes: 'Note 1',
          img: '/public/shirts/casual_shirt.webp'
        },
        { id: 16,
          name: 'Best Accessory', 
          brand: 'Definitely Awesome', 
          type: 'Casual', 
          color: 'Black',
          notes: 'Note 2',
          img: '/public/accessories/accessory_2.jpg'
        }
      ],
    };
    const res = await axios.post(`${serverUrl}random`, outfitrandom);
    expect(res.status).to.equal(201);
    expect(res.data).to.have.property('message', 'New outfit generated and saved successfully.');
  });
});

// Ella's test