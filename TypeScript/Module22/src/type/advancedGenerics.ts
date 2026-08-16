// function userSate(initialValue){
//     let value = initialValue;

//     function setValue(newValue){
//         value = newValue;
//     }

// //     return [value,setValue]
// // }

// const [value, func] = userSate(0);


function userSate<T>(initialValue: T): [T,(value: T)=> void]{
    let value = initialValue;
    function setValue(newValue: T){
        value = newValue;
    }

    return [value,setValue];
}

userSate<number>(0);

interface User{
    email: string;
    isLoggedIn: boolean;
}

userSate<User | null>(null);
userSate<User>({email: " ",isLoggedIn:false})
