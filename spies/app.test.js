const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__set__;
// app.__get__;

describe('App',()=>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);

    it('Should call the spy correctly',()=>{
        var spy = expect.createSpy();
        spy('kumar',25);
        expect(spy).toHaveBeenCalledWith('kumar',25);
    });

    it('Should call saveUser with user Object',()=>{
        var email = 'kumar@test.com';
        var password = 'abcdef';
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalled({email,password});
    });
});