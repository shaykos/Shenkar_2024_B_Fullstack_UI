
export default class Person{
    protected name: string;
    protected age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public startCooking(food: string){
        console.log(`${this.name} is cooking ${food}`);
    }

    public eat(food: string){
        console.log(`${this.name} is eating ${food}`);
    }

    public sleep(hours: number){
        console.log(`${this.name} is sleeping for ${hours} hours`);
    }
}


