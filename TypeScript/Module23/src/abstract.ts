abstract class Shape{
    abstract area(): number
}
class Circle extends Shape{
    radius: number

    constructor (redius: number){
        super()
        this.radius = redius
    }
    area():number{
        return 3.1416 * this.radius * this.radius;
    }
}