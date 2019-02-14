var db = require('./db.js');

module.exports.handleSignup = (email,password)=>{
    // Check email exists.
    // save the user to db.
    db.saveUser({
        email,
        password
    });
    //send tyhe welcome email.
};