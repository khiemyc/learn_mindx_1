class PhoneBook {
    name;
    phoneNumber;
    workPlace;
    constructor(name,phoneNumber,workPlace) {
       this.name = name;
       this.phoneNumber = phoneNumber;
       this.workPlace = workPlace; 
    }
    set info(data){
        this.name = data.name;
        this.phoneNumber = data.phoneNumber;
        this.workPlace = data.workPlace;
    }
}

class ManagerPhoneBook extends PhoneBook{
    phoneList;
    constructor(name,phoneNumber,workPlace){
        super(name,phoneNumber,workPlace,phoneNumber)
        this.phoneList = [];
    }
    addPhoneNumber(phone){
        if(phone instanceof PhoneBook){
            this.phoneList.push(phone);
        }else{
            console.log("khong them duoc")
        }
    }
    updatePhoneNumber(phoneNumber,data){
        let number =  this.phoneList.find(function (phoneList) {
            return  phoneList.phoneNumber = phoneNumber; 
        })
        if(number !=null){
            number.info = data;
        }
    }
    deletePhoneNumber(phoneNumber){
        let numberindex = this.phoneList.findIndex(function (phonelist) {
           return phonelist.phoneNumber = phoneNumber; 
        })
        if(numberindex >= 0){
            this.phoneList.slice(numberindex,1)
        }
    }
    get info(){
        this.phoneList.forEach(function (params) {
           console.log(params) 
        })
    }
    findByNameOrNumber(info){
        return info = this.phoneList.find(function(phonelist){
            return phonelist.name == info.name || phonelist.number == info.number
        })
    }
}