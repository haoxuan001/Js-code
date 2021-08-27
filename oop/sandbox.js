class user{
    constructor(userName,email){
        //set up properties
        this.userName = userName;
        this.email = email;
        this.score =0;
    }
    login(){
        console.log(`${this.userName} have logged in`);
        return this;
    }
    logout(){
        console.log(`${this.userName} have logged out`);
        return this;
    }
    incScore(){
        this.score +=1;
        console.log(`${this.userName} has a score of ${this.score}`);
        //return object instances
        return this;
    }
}
//////Delete user///////
    class Admin extends user{
        constructor(userName,email,title){
            super(userName,email);
            this.title =title;

        }
        deleteUser(user){
            users = users.filter((u)=>{
                return u.userName !== user.userName
            });
        }

    }
const userOne = new user('Lee','lee@gamil.com');
const userTwo = new user('steve','Stebiha@gmail.com');
const userThree = new Admin('Alan','alan01@gmail.com','Max-level');


console.log(userOne,userTwo,userThree);

let users =[userOne,userTwo,userThree];


console.log(userThree);