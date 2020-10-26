class Company {
    nameCompany;
    establishedDate;//ngay thanh lap
    country;
    businessType;
    employees;
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
class Employee extends Company {
    nameEmplyee;
    sex;
    age;
    address;
    constructor(nameCompany, establishedDate, country, businessType, employees, nameEmployee, sex, age, address) {
        super(nameCompany, establishedDate, country, businessType, employees)
        this.nameEmployee = nameEmployee
        this.sex = sex;
        this.age = age;
        this.address = address
    }
    about() {
        console.log(`${this.nameEmplyee}, ${this.age}, ${this.address},${this.nameCompany}`)
    }
}
class Ceo extends Employee {
    strategy;
    constructor(nameCompany, establishedDate, country, businessType, employees, nameEmployee, sex, age, address, strategy) {
        super(nameCompany, establishedDate, country, businessType, employees, nameEmployee, sex, age, address)
        this.strategy = strategy
    }
}
class Mamager extends Employee {
    managementStyle;
    constructor(nameCompany, establishedDate, country, businessType, employees, nameEmployee, sex, age, address, managementStyle) {
        super(nameCompany, establishedDate, country, businessType, employees, nameEmployee, sex, age, address)
        this.managementStyle = managementStyle;

    }
}

class Staff extends Employee {
    experience;
    constructor(nameCompany, establishedDate, country, businessType, employees, nameEmployee, sex, age, address, experience) {
        super(nameCompany, establishedDate, country, businessType, employees, nameEmployee, sex, age, address)
        this.experience = experience
    }
}

let company = new Company("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'])

let ceo = new Ceo("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten ceo",'male','24','ha noi','lieu an nhieu')

let managers1 = new Mamager("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],'ten manager','nu',25,'ha noi 2','phong cach quan ly 1')
let managers1 = new Mamager("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],'ten manager','nu',25,'ha noi 2','phong cach quan ly 1')
let managers1 = new Mamager("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],'ten manager','nu',25,'ha noi 2','phong cach quan ly 1')
let managers1 = new Mamager("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],'ten manager','nu',25,'ha noi 2','phong cach quan ly 1')
let managers1 = new Mamager("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],'ten manager','nu',25,'ha noi 2','phong cach quan ly 1')

let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)
let staffs = new Staff("cong tay 1",20/20/2020,"viet nam","marketing",['nhan vien1','nhan vien 2'],"ten nhan vien",'nu',26,'ha noi',2)