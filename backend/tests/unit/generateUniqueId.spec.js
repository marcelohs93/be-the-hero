const generateUniqueid = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () =>{
    it('should generate an unique ID', ()=>{
        const id = generateUniqueid();
        expect(id).toHaveLength(8);
    })
})