const username = '张三'


function sayHello() {
    console.log('大家好我是' + username);
}


module.exports = {
    username,
    sayHello
}

module.exports.me = function me() {
    console.log('me');
}

