interface UserContent{
    fullname : string,
    email : string,
    password : string
}

export class User {
    fullname : string;
    email : string;
    password : string;
    constructor ({fullname, email, password }: UserContent){
        this.fullname = fullname;
        this.email = email;
        this.password = password
    }
}