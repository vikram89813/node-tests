const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.status(200).send({
        error: 'page not found.',
        name: 'todo appv1.0'
    });
});

app.get('/users',(req,res)=>{
    res.send([{
        name: 'Mike',
        age: 27
    },{
        name: 'Kumar',
        age: 25
    },{
        name:'Jen',
        age:26
    }]);
});

app.listen(3000,()=>{
    console.log('server is up on port 3000');
});

module.exports.app = app;