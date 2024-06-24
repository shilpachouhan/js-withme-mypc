const mySym = Symbol("Key1")

const jsUser = {
    name : "Shilpa",
    "Full name" : "Shilpa chouahn",
    [mySym]: "myKey1",
    age : "29",
    location : "Himachal",
    email : "chouhanshilpa545@gmail.com",
    isloggedIn : false,
    LastLoginDays : ["Monday", "Saturady"]
}

//console.log(jsUser.email);
//console.log(jsUser["email"])
//console.log(jsUser["Full name"])
//console.log(jsUser[mySym])

//jsUser.email = "shilpachouahn@chatgpt.com"
//Object.freeze(jsUser)
//jsUser.email = "shilpachouhan@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



