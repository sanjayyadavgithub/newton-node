/**   Object Anonymous and Arrow function  */
// //obj
// var users = {
//     name: 'sanjay',
//     age: 20,
//     email: 'abc@gmail.com'
// }
// console.log(users.email);

// //Anonymous fun

// var fun = function () {
//     console.log(users.age);
// }
// fun();

// //Arrow function
// var fun1 = () => {
//     console.log(users.name);
// }
// fun1();


/** global Object
 * __dirname
 * __filename
 * require
 * console
 * buffer
 * module
 * exports
 */



//ECMAScript ------------------

/*
class Users {
    constructor() {
        this.name = "sanjay"
        this.age = 202202
        this.email = 'abc@gmail.com'
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getEmail() {
        return this.email
    }
}


const users = new Users();
console.log(users.getName());
console.log(users.getAge());
console.log(users.getEmail())

*/

//prototype------------------
/*
const student = function(){
    this.name = "sanjay";
    this.age = 202202;
    this.email = 'abc@gmail.com'
}
student.prototype ={
    address : "basti",
    getName: () => {
        return this.name;
    } 
}
const std = new student();
console.log(std.address);
console.log(std.name);
*/
//---------Nodejs Module------------------------
/*
const cal = require('./addition');
console.log(cal.addition());
console.log(cal.aval);
*/


// //-----------------------------------Httpmodule---------
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write("asdfghjkvhvj");
//     res.end();
// }).listen(300000000);


//   -------- fs-------------
// const fs = require("fs");


//----------------------------------------express module -----------------------------------

/*
const express = require("express");
const app = express();

var Validation = function (req, res, next) {
    console.log('middleware is working');
    next();
}
//app.use(Validation);

app.get('/',Validation, (req, res) => {
    res.send('hello sanjay middleware');
});


// app.get('/user/:Id', (req, res) => {
//     if (req.params.Id == undefined) {
//         res.send('all data is acess');
//     } else {
//         res.send('users data acess ' + req.params.Id);
//     }
// });
//app.use('/static', express.static('programing prictics\Books-bootstrap-website-master/src/Index.html'))

app.listen(300, () => console.log("server runing on port 30000"));

*/


// const express = require("express");
// const app = express();


// app.use('/static', express.static('index.html'))





// app.listen(300, () => console.log("server runing onport number 300"));

//----------Template Engine of use of PUG/EJS/twig----------
/*
install pug/ejs ---->npm i pug/ejs
add in js ----> app.set('view sngine','pug/ejs');
create views and store all template file  --> index.pug/ejs
path set-->app.set('/views','./public/views);
render template -->res.render('index.pug/ejs',{title:"sanjay",messgage:'sanjay'});
in file index.pug/ejs{
    html format view in dacumentation for pug/ejs
}

install body-parser 
create two file where data get and put 
in js for get data file--> 
app.get('/',(req,res)=>{
    res.render('index',{title:'loginfrom' , message : "input data"})
})
in js post data-->
app.post('/',jsonParser,(req,res)=>{
    res.render('login',{title:"user datail,username:req.body.username,password:req.body.pass"})
})


//---------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------introduction of mongo DB in nodejs-------------











































































