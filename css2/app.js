// bai bve nha
// let input = prompt("nhap vao day so: ");
// let nums = input.split(',').map(function(item){
//     return Number(item)
// });

// let x = Number(prompt("Nhap vao so x: "))
// for (let i = 0; i < array.length -1; i++) {
//     for (let j = i +1; j < array.length; j++) {

//     }
// }

// console.log(nums)

//class - object
// Class: bản thiêt kết đê tao 1 đôố tuơng
// class Person{
//     name;
//     age;
//     address;
//     sex;
//     isMarriage;
//     // duoc goi khi goji new Person duoc call
//     constructor(name,age,address,sex,isMarriage){
//        this.name = name;
//        this.age = age;
//        this.address = address;
//        this.sex = sex;
//        this.isMarriage = isMarriage;
//     //    console.log(this)
//     }
//        run(){
//         console.log(`I'm Running`);
//     }
//     walk(){
//         console.log(`I'm walking`);
//     }
//     goto(destination){
//         console.log(`I'm going to ${destination}`)
//     }
//     calculateSum(a,b){
//         console.log(`${a} + ${b} = ${a +b}`)
//     }
//     sleep = function(){
//         console.log("dang ngu")
//     }
//     laugh = () =>{

//     }
//     introduce(){
//         console.log(`
//         Xin chao,
//         Minh la ${this.name}.
//         Nam nay minh ${this.age} tuoi
//         Que minh o ${this.address}   
//         `)
//     }
// }
// object: duoc tao tu class
// let hoangAnh = new Person("hoang anh",20,"vit nam","male",true);
// hoangAnh.goto("aaaaa")
// hoangAnh.introduce()
// let tung = new Person('tung',29,'phu tho','male',false)
// tung.goto('coffee house')
// let duy = new Person('duy',20,'nam dinh','male',false)
// duy.sleep()
// console.log(hoangAnh)

// **Animal**

// class Animal {
//     name;
//     gender;
//     species;
//     color;
//     legs;
//     constructor(name,gender,species,color,legs){
//         this.name = name;
//         this.gender = gender;
//         this.species = species;
//         this.color = color;
//         this.legs = legs;
//     }
//     speak(){
//         console.log(`
//             con ${this.name}  biet noi
//         `)
//     }
//     walk(){
//         console.log(`
//         con ${this.name} co ${this.legs} chan 
//         `)
//     }

// }

// let cho = new Animal("cho vang",'cai','co vu','black',4)
// cho.speak()
// cho.walk()
// let ga = new Animal('tom','duc','co vu','meo vang',4)
// ga.speak()
// ga.walk()
// let ran = new Animal('slecker','cai','bo sat','ran ho mang',0)
// ran.speak()
// ran.walk()
// console.log(cho,ga,ran)

// ++ Ke thua
// class Person {
//     name;
//     sex;
//     age;
//     slogan;
//     constructor(name, sex, age, slogan) {
//         this.name = name;
//         this.sex = sex;
//         this.age = age;
//         this.slogan = slogan;
//     }
// }

// class GoodBoy extends Person {
//     poor;

//     constructor(name, sex, age, slogan,poor){
//         super(name,sex,age,slogan);
//         this.poor = poor;
//     }
// }

// class BigcityBoy extends Person{
//     rich;
//     constructor(name,sex,age,slogan,rich){
//         super(name,sex,age,slogan);
//         this.rich = rich
//     }
// }

// let khiem = new GoodBoy('khiem','male',24,'Em an com voi canh chuwa','rick')
// console.log(khiem)
// let bigcityBoy = new BigcityBoy('khiem','male',20,'em oi',true)
// console.log(bigcityBoy)

class Person {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    speak() {
        console.log(this.name)
    }
}

class Boy extends Person {
    sex;
    strength;
    constructor(name, age, address,strength) {
          super(name, age, address)
        this.sex = 'male';
        this.strength = strength;
    }
    hit() {
        console.log("hit")
    }
}

class Girl extends Person {
    sex;
    beauty;
    constructor(name, age, address, beauty) {
        super(name, age, address);
        this.sex = "female";
        this.beauty = beauty;
    }
}

class GoodBoy extends Boy{
    poor;
    constructor(name,age,address,strength,poor){
          super(name,age,address,strength)
        this.poor = poor
    }
}
class Badboy extends Boy{
    rich;
    constructor(name,age,address,strength,rich){
        super(name,age,address,strength,rich)
        this.rich = rich
    }
}
let badboy = new Badboy("khiem",20,'hai duong','streagth',true)
console.log(badboy)
console.log(badboy.hit())
console.log(badboy.speak() )
