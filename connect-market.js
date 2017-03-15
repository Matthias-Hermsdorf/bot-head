console.log("head thinks of market connecting")
var market = require('socket.io-client')('http://localhost:3095');
var pjson = require('./package.json');
let ip = require('my-local-ip')();
console.log("head thinks of market")
    
market.on('connect', function(){ 
    console.log("connecect to :3095, myip:",ip) 
    market.emit("device-add",{name:"Marvin",host:"http://"+ip+":"+pjson.port, type:"head"})
});
