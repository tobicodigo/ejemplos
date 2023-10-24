class User {
    #firstName = "hello world";
    #lastName = "hello world";


    constructor(firstName,lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;

    }

    getName() {
        return this.#firstName + " "+ this.#lastName;
    }

    get firstName() {
        return this.#firstName +"!";

    }

    set firstName(x) {
        this.#firstName = x;
      }

}


class Admin extends User {

    constructor(){
        super("Mr", "Admin")
    }
}


let user = new User("Tobias","Goral")
let admin = new Admin();

console.log(user.getName())
console.log(user.firstName)
console.log(admin.getName())
console.log(admin.firstName)
