class Company {
    nameCompany;
    establishedDate;//ngay thanh lap
    country;
    businessType;
    employees = [];
    constructor(nameCompany, establishedDate, country, businessType, employees) {
        this.nameCompany = nameCompany;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees = employees
    }
    showAllEmployees() {
        console.log(this.employees)
    }
    showCEO() {

    }
    showManagers() {

    }
    showStaffs() {

    }
}
class Employee  {
    nameEmplyee;
    sex;
    age;
    address;
    constructor(nameEmployee, sex, age, address) {
        this.nameEmployee = nameEmployee
        this.sex = sex;
        this.age = age;
        this.address = address
    }
    about() {
        console.log(`${this.nameEmplyee}, ${this.age}, ${this.address}`)
    }
}
class Ceo extends Employee {
    strategy;
    constructor(nameEmployee, sex, age, address, strategy) {
        super(nameEmployee, sex, age, address)
        this.strategy = strategy
    }
}
class Mamager extends Employee {
    managementStyle;
    constructor(nameEmployee, sex, age, address, managementStyle) {
        super(nameEmployee, sex, age, address)
        this.managementStyle = managementStyle;
    }
}

class Staff extends Employee {
    experience;
    constructor(nameEmployee, sex, age, address, experience) {
        super(nameEmployee, sex, age, address)
        this.experience = experience
    }
}

let company = new Company("cong tay 1", 20 / 20 / 2020, "viet nam", "marketing", ['nhan vien1', 'nhan vien 2'])


let ceo = new Ceo("")
