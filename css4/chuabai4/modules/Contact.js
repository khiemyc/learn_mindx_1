export default class Contact{
    name;
    numberPhone;
    address;
    email;
    constructor(name,numberPhone,address,email) {
       this.name = name;
       this.numberPhone = numberPhone;
       this.address = address;
       this.email = email; 
    }
    showInfo(){
        console.log(`
        Name: ${this.name},
        NumberPhone: ${this.numberPhone},
        Address: ${this.address},
        Email: ${this.email} 
        `)
    }
    set Sname(name){
        this.name = name;
    }
    set Semail(email){
        this.email = email;
    }
    set SnumberPhone(numberPhone){
        this.numberPhone = numberPhone;
    }
    set Saddress(address){
        this.address = address;
    }
}