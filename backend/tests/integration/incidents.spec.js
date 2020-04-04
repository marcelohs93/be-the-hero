const teste = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
let idCreated = 0;

it('should be able to create a new Incident', async() => {
    const response = await teste(app)
        .post('/incidents')
        .set({'Authorization':'6eaed410'})
        .send({
            "title": "Gato Perdido 2",
            "description": "Gato sumiu 2",
            "value": 1
        });
        idCreated = response.body.id
        expect(response.body).toHaveProperty('id');
})

it('should be able to delete an incident', async () =>{
    const response = await teste(app)
    .delete(`/incidents/${idCreated}`)
    .set({'Authorization':'6eaed410'})
    .send();
    expect(response.status).toBe(204);
})  