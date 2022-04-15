export default class User {
    username = '';
    email = '';
    passw = '';
    addr = '';
    constructor(username, passw) {
        this.username = username;
        this.passw = passw;
    }
    setUserProfile(email, passw, addr, username) {
        this.email = email;
        this.passw = passw;
        this.addr = addr;
        this.username = username;
    }
    printUserProfile() {
        console.log(`Username : ${this.username},
        Password : ${this.passw},
        E-mail : ${this.email},
        Address : ${this.addr}`);
    }

}
//Now let's create a template object
//let profile = new user('Moaz Abdelnasser', '');
//prof.printUserProfile();