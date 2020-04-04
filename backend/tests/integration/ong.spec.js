const teste = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
    beforeEach(async () => {
        // await connection.migrate.rollback();
        await connection.migrate.latest();
    })
    afterAll(async ()=>{
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await teste(app)
            .post('/ongs')
            .send({
                name: "SYDNEY",
                email: "contato@teste.com",
                whatsapp: "1111111111",
                city: "Sao Paulo",
                uf:"SP"
        });
        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })

})  