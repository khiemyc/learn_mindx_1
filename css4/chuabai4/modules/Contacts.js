

import Contact from "./Contact.js"

export default class Contacts {
    lists = [];
    constructor(lists) {
        this.lists = lists;
    }
    addContact(name, numberPhone, address = "", email = "") {
        if (name.trim() === "" || numberPhone.length != 10 || Number(numberPhone) == NaN) {
            return "input invalid!!!"
        }
        let contact = new Contact(name, numberPhone, address, email)
        this.lists.push(contact)
    }
    editContact(numberPhone,contact) {
        let index = this.lists.findIndex(function (contact) {
            return contact.numberPhone = numberPhone;
        })

        if(index != -1){
            // this.lists[index].name = "name" in contact ? contact.name:
            if("name" in contact){
                this.lists[index].Sname = contact.name;
            } 
            if("numberPhone" in contact){
                this.lists[index].SnumberPhone = contact.numberPhone;
            }
            if("email" in contact){
                this.lists[index].Semail = contact.numberPhone
            }
            if("address" in contact){
                this.lists[index].Saddress = contact.address
            }
        }
    }
    deleteContact(numberPhone){
        this.lists = this.lists.filter(function (contact) {
            return contact.numberPhone != numberPhone;
        })
    }

    search(name){
        let contactFilter = this.lists.filter(function (contact) {
            return contact.name.indexOf(name) != -1; 
        })

        console.log(contactFilter)
    }
}