// interface ArrayLength<T>{
//     array: T;
// }

function getArrayLength<T>(array: T[]): number{
    return array.length;
}

getArrayLength<number>([1,2])