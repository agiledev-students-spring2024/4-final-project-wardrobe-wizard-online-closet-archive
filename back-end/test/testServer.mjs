import chai from 'chai';
import axios from 'axios';
import '../server.js';
import chaiHttp from 'chai-http';
chai.use(chaiHttp)
// referenced https://mochajs.org/

/* Navid's tests */
const serverUrl = 'http://localhost:3001/'; 

describe('GET method /shirts', () => {
  it('returns 200', async done => {
    chai.request(serverUrl)
    .get('/shirts')
    .end((err, res) => {
      chai.expect(res).to.have.status(200);
      done();
    })
  });
});

// describe('GET method /pants', () => {
//   it('returns 200', done => {
//     chai.request(serverUrl)
//     .get('/pants')
//     .end( (err, res) => {
//       if(err) console.log(err);
//       chai.expect(res).to.have.status(200);
//       done();
//     })
//   })
// })

// describe('GET method /skirts', () => {
//   it('returns 200', done => {
//     chai.request(serverUrl)
//     .get('/skirts')
//     .end( (res) => {
//       chai.expect(res).to.have.status(200);
//       done();
//     })
//   })
// })

// describe('GET method /jackets', () => {
//   it('returns 200', done => {
//     chai.request(serverUrl)
//     .get('/jackets')
//     .end( (res) => {
//       chai.expect(res).to.have.status(200);
//       done();
//     })
//   })
// })

// describe('GET method /shoes', () => {
//   it('returns 200', done => {
//     chai.request(serverUrl)
//     .get('/shoes')
//     .end( (res) => {
//       chai.expect(res).to.have.status(200);
//       done();
//     })
//   })
// })

// describe('GET method /accessories', () => {
//   it('returns 200', done => {
//     chai.request(serverUrl)
//     .get('/accesories')
//     .end( (res) => {
//       chai.expect(res).to.have.status(200);
//       done();
//     })
//   })
// })

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
