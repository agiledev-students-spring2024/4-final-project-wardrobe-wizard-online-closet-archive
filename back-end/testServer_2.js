// import server from '../app.js';
// import request from 'supertest';
const server = require('./app.js');
const request = require('supertest');

test('example GET shirts', async () => {
    const res = await request(server).get('/shirts');
    expect(res.statusCode).toBe(200);
})