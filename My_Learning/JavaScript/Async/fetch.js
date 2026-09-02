let randomUser = () => {
    fetch(`https://randomuser.me/api/`)
    .then((raw)=>{
        return raw.json();
    }).then((data) => {
        console.log(data)
    }).catch(()=>{
        console.log("Data can't load!! ")
    })
}

randomUser()