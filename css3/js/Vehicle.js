export class Vehicle{
    name;
    speed;
    brand;
    constructor(name,speed,brand){
        this.name = name;
        this.speed = speed;
        this.brand = brand;
    }
    about(){
        console.log(`phuong tien: ${this.name} toc do ${this.speed} thuong hieu ${this.brand}`)
    }

}
