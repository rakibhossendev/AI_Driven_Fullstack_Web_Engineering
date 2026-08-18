class Animal{
    private __name: string
    constructor (name: string){
        this.__name = name
    }

    getVoice(): void{
        console.log("Spraaaaaaaaaaaaaaaaaaaaaa")
    }
}

class Cat extends Animal{
    
}