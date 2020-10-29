import {Vehicle} from "./Vehicle.js"

export class Car extends Vehicle{
    static wheels = 4;

    about(){
        super.about();
        console.log(`Xe hoi ${this.name} chay voi toc do ${this.speed}`)
    }
    
    static aboutCar(){
        console.log("day la xe hoi: static")
    
    }
    get info(){
        return `
        day la xe hoi, ten cua no la ${this.name}
        chay voi toc do ${this.speed}
        san xuat hang ${this.brand}
        `
    }

    set preferdSpeed(preferdSpeed){
        if(isNaN(preferdSpeed)){
            console.log('nhap vao 1 so')
        }else{
        this.speed = preferdSpeed;
        }
    }
}
