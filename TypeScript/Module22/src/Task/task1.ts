const val: unknown = "Hello TypeScript";
const len: number = (<string>val).length;

console.log(len)