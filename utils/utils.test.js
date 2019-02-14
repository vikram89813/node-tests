const utils = require('./utils');
const expect = require('expect');

describe('Utils', ()=>{
    describe('#add' ,()=>{
        it('Should add two numbers', ()=>{
            var res = utils.add(33,11);
            // if(res !== 44) {
            //     throw new Error(`Value Not correct, expected 44 but got ${res}`);
            // }
            expect(res).toBeA('number').toBe(44);
        });
    });
    
    it('Should square a number', () =>{
        var res = utils.square(5);
        // if(res!= 25) {
        //     throw new Error(`Expected 25, but got ${res}`);
        // }
        expect(res).toBeA('number').toBe(25);
    }); 

    it('Async add method check.',(done)=>{
        utils.asyncAdd(4,3,(sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
});

it('Should expect some value', ()=>{
    // expect(12).toNotBe(11);
    // expect({name: 'Kumar'}).toEqual({name: 'Kumar'});
    // expect([2,3,4]).toInclude(2);
    // expect([2,3,4]).toExclude(5);

    expect({
        name: 'kumar',
        age: 25
    }).toInclude({
        age:25
    });
});

it('Should verify first and last name are set', ()=>{
    var user = {
        location: 'bangalore',
        age: 25
    };

    var res = utils.setName(user,'Kumar Vikram');
    //expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: 'Kumar',
        lastName: 'Vikram'
    });
});
