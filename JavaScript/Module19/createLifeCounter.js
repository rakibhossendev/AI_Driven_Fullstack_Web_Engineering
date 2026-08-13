const createLifeCounter = ()=>{
    let life = 3;
    return ()=>{
        if(life > 0) life--;
        return life;
    }
}

const MeghlaLife = createLifeCounter();
console.log(MeghlaLife());
console.log(MeghlaLife());
console.log(MeghlaLife());
