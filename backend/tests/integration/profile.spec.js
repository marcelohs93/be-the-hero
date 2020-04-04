const teste = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

it('should be ablot to Logon', async() => {
    const response = await teste(app)
    .post('/sessions')
    .send({
        "id":"6eaed410"
    })
    expect(response.body).toHaveProperty('name');
})