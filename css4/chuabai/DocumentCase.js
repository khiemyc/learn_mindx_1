import Document from "./Document.js"
export default class DocumentCase {
    id;
    name;
    documents;
    owner;
    dataModified;
    constructor(name, owner) {
        this.id = uuid.v4();
        this.name = name;
        this.owner = owner;
        this.documents = [];
        this.dataModified = new Date().toISOString();
    }
    addDocument(document) {
        if (document instanceof Document) {
            this.documents.push(document);
        }
        else {
            console.log("khong phai the hien cua Document")
        }
    }

    findDocument(name) {
        // let result = [];
        // for(let document of this.documents){
        //     if(document.name == name){
        //         result.push(document);
        //     }
        // }
        // return result;
        //    cach 2
        let result = this.documents.filter(function(document){
           return document.name == name;
        })
        return result;
    }
    showDocments(){
        this.documents.forEach(function(document){
            console.log(document.info)
        })
    }
    deleteDocument(id){
        // let foundIndex = -1;
        // for(let i =0; i<this.documents.length; i++){
        //     if(this.document[i].id == id){
        //         foundIndex = i;
        //     }
        

        let foundIndex = this.documents.findIndex(function(document){
            // null tra ve -1
            return document.id = id;
        })

        if(foundIndex >= 0){
            this.documents.splice(foundIndex,1);
        }
    }

    updateDocument(id,data){
        let found = this.documents.find(function(document){
            return document.id = id;
        })
        if(found != null){
            found.info = data;
        }
    }
}