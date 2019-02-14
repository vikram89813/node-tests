const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server',()=>{
    describe('Get /',()=>{
        it('Should return hello world response', (done)=>{
            request(app)
                .get('/')
                .expect(200)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        error: 'page not found.'
                    })
                })
                .end(done);
        });
    });

    describe('Get /users',()=>{
        it('Should return my user object', (done)=>{
            request(app)
                .get('/users')
                .expect(200)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        name:'Kumar',
                        age:25
                    });  
                })
                .end(done);
        });
    });
});
