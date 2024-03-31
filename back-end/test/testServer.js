import * as chai from 'chai';
import axios from 'axios';
import '../server.js';

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

