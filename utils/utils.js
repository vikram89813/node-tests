// module.exports.add = (a,b) => {
//     return a+b;
// };

var add = (a,b)=> a+b;
var square = (x) => x*x;
var setName = (user, fullName) =>{
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

var asyncAdd = (a,b,callback) => {
    setTimeout(()=>{
        callback(a+b);
    },1000);
};

module.exports = {
    add,
    square,
    setName,
    asyncAdd
}