
console.log("* * * * * * * * * * * * * * * THIS * * * * * * * * * * * * * * * ")
//Excercise 1: 
console.log("____________________EXCERCISE 1____________________")
var data = {
    info: "This Is My Info Inside This Object.",
    logInfo: function(){
        console.log(this.info);
    }
};

data.logInfo();

//Excercise 2:
console.log("\n____________________EXCERCISE 2____________________")
var user = {
    name: "James",
    getName: function(){
        return this.name;
    }
}
console.log(user.getName());

//Excercise 3:
console.log("\n____________________EXCERCISE 3____________________")
var mail = {
    port: function(){
        return 225;
    },
    send: function(){
        console.log("Request To Port: " + this.port());
    }
}

mail.send();

//Excercise 4:
console.log("\n____________________EXCERCISE 4____________________")
var data = {
    articles: ['string1', 'string2', 'string3', 'string4', 'string5'],
    print: function(){
        var $ls = document.getElementById('content')
        for (let index = 0; index < this.articles.length; index++) {
           $ls.innerHTML += '<p>' + this.articles[index] + '</p>';
        }
    }
}

data.print();

//Excercise 5:
console.log("\n____________________EXCERCISE 5____________________")
var ob = {
    name: null,
    getterFunc: function () {
        return this.name;
    },
    setterFunc(name) {
        this.name = name;
        return this;
    }
}

console.log(ob.setterFunc('Lewis Hamilton').getterFunc());


//Excercise 6:
console.log("\n____________________EXCERCISE 6____________________")
var product = {
    size: ['SMALL', 'MEDIUM', 'LARGE', 'EXTRA LARGE'],
    print: function(){
        var $sz = document.getElementById('size')
        for (let index = 0; index < this.size.length; index++) {
            $sz.innerHTML += '<option>' + this.size[index] + '</option>';
        }
    }
}

console.log(product.print());


//Excercise 7:


//Questions - Answers
console.log("\n____________________QUESTIONS & ANSWERS____________________");
console.log("1) shimi");
console.log("2) this - we can use this to get value of properties in to some object and it will always know values of properties,we use this into methods.")
console.log("3) Getter & Setter - first of all on background they are functions,they help us to get(return) and update(change) values of properties: Getter - return value, Setter - Change/Update Value.")
console.log("4) 3d");
console.log("5) face.com");
console.log("6) 6")


console.log("\n* * * * * * * * * * * * * * * CLASSES * * * * * * * * * * * * * * * ");
//Excercise: 1
console.log("____________________EXCERCISE 1____________________");
class Request {
    url = 'Google.com'
};
var firstRequest = new Request();
console.log(firstRequest.url);

//Excercise 2:
console.log("\n____________________EXCERCISE 2____________________")
let Mail = function(){
    this.port = 225,
    this.send = function(){
        return "Port: " + this.port;
    }
}
var mail1 = new Mail();
console.log(mail1.send());

//Excercise 3:
/*
console.log("\n____________________EXCERCISE 3____________________")
class Hash {
    key = 0;
    getter = function(){
        return this.key;
    }
    setter = function(newkey){
        this.key = newkey;
    }
}

var hash1 = new Hash();
console.log(hash1.setter(7).getter());

*/
//Excercise 4:
console.log("\n____________________EXCERCISE 4____________________")
class Http{
    siteUrl = 'facebook.com';
    protocolo = 'http';
}

let site = new Http();
delete Http.siteUrl;
Http.prototype = 'https';
Http.prototype.category = 'shoping';
Http.prototype.getSite = function(){
    console.log(Http.siteUrl);
}


//Excercise 5:
console.log("\n____________________EXCERCISE 5____________________")
class DB{
    names = ["Miki", "Niki", "Jack", "Michael"]
    render = function(){
        for (let index = 0; index < this.names.length; index++) {
            var $id = document.getElementById('names-list');
            $id.innerHTML += '<li>' + this.names[index] + '</li>';
            
        }
    }
}
let dbNew = new DB();
dbNew.render();

//Excercise 6:
console.log("\n____________________EXCERCISE 6____________________")
class Garage{
    address = "Tel Aviv"
    carquentity = 0
    addCar = function(num){
        carquentity += num
    }
}

let garage1 = new Garage();
for (var key in garage1) {
   if(typeof garage1[key] != 'function'){
       console.log(garage1[key]);
   }
}


//Excercise 7:
console.log("\n____________________EXCERCISE 7____________________")
var Email = function(email){
    this.email = email;
    this.sendMail = function(){
        console.log("Mail Send To: " + this.email);
    }
}

let newEm = new Email('gks97@gmail.com');
newEm.sendMail();


//Questions - Answers
console.log("\n____________________QUESTIONS & ANSWERS____________________");
console.log("1) Object Oriented Programming");
console.log("2) Every word will be Uppercase");
console.log("3) make object from some class");
console.log("4) true, undefined");
console.log("5) 4");
console.log("6) undefined");
console.log("7) delete");
console.log("8) 11");
console.log("9) function");
console.log("10) בנאי");


