import Document from "./Document.js";

export default class EBook extends Document{
    discount;
    constructor(name,author,price,publishDate,discount){
        super(name,author,price,publishDate);
        this.discount = discount;
    }
    get info(){
        return `
             Id: ${this.id},
            Name: ${this.name},
            Price: ${this.price * (100 - this.discount)/100},
            Author: ${this.author},
            Publish Date: ${this.publishDate}
        `
    }
}