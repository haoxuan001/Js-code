
function user(username,email){
    this.userame = username;
    this.email  =email;
  
}

user.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
}

user.prototype.logout =function(){
    console.log(`${this.username} has logged out`);
    return this;
}

function Admin(username,email,title){
    user.call(this,username,email);
    this.title = title;
}
Admin.prototype = Object.create(user.prototype);

Admin.prototype.deleteUser = function(){
    //delete a user
};

const userOne =new user('lee','lee@gmail.com');
const userTwo = new user('Steven','ste@gmail.com');
const userThree =new Admin('zoe','zoe54@gmail.com','The Max-level');

console.log(userOne,userTwo,userThree);
userOne.login();
userOne.logout();