class Document {
    _id;
    _name;
    _author;
    _price;
    _publishDate;
    constructor(id, name, author, price, publishDate) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._price = price;
        this._publishDate = publishDate;
    }
    get info() {
        return {
            id: this._id,
            name: this._name,
            author: this._author,
            price: this._price,
            publishDate: this._publishDate,
        }


    }
    set info(data) {
        this._id = data.id;
        this._name = data.name;
        this._author = data.author;
        this._price = data.price;
        this._publishDate = data.publishDate;
    }
}

// let doc = new Document("iddoc","namedoc","authordoc","price","publicdate")

// console.log(doc)

// let objData ={
//     id:'id1',
//     name:"name2",
//     author:"author1",
//     price:"prices1",
//     publishDate:"publicdate2",
// }
// doc.info = objData
// console.log(doc.info)

class EBook extends Document {
    _discount;
    constructor(id, name, author, price, publishDate, discount) {
        super(id, name, author, price, publishDate)
        this._discount = discount;
    }
    get info() {
        let price = this._price - ((this._discount / this._price) * 100)
        return {
            id: this._id,
            name: this._name,
            author: this._author,
            price: price,
            publicdate: this._publishDate,
            discount: this._discount,
        }
    }
}

// let ebook = new EBook('id','ten sach','tac gia',100,'20/20/2020',20)

// console.log(ebook.info)

class HardCopy extends Document {
    _source;
    constructor(id, name, author, price, publicdate, source) {
        super(id, name, author, price, publicdate);
        this._source = source;
    }
    get info() {
        return {
            id: this._id,
            name: this._name,
            author: this._author,
            price: this._price,
            publicdate: this._publishDate,
            source: this._source
        }
    }
}


class DocumentCase {
    _id;
    _name;
    _documents = [];
    _owner;
    _dateModified;
    constructor(id, name, documet, owner, dateModified) {
        this._id = id;
        this._name = name;
        this._documents.push(document)
        this._owner = owner;
        this._dateModified = dateModified;
    }
    addDocument(document) {
        this._documents = document;
    }
    findDocuments(name){
        console.log(this)
        for (const items in this._documents) {
            if(name == this[items]){
                 console.log(this[items])
            }
        }
    }
}
let document = new Document("iddoc", "namedoc", "authordoc", "price", "publicdate")
let document2 = new Document("iddoc", "namedoc", "authordoc", "price", "publicdate")

let newDocumetnCase = new DocumentCase('idcase1', 'namecas', document,'tac gia case','datemodifi')

console.log(newDocumetnCase)
// newDocumetnCase.addDocument(document)
// console.log(newDocumetnCase)

// newDocumetnCase.findDocuments("namecas")
