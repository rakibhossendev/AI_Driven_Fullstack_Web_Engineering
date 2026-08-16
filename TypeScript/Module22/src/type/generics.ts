// interface Response{
//     data: any;
//     status: number;
// }

interface Response<T>{
    data: T;
    status: number;
};

// const transactionResponse: Response<string> = {
//     data: "Transaction Successful",
//     status: 200
// }

// const transactionStatus: Response<boolean> = {
//     data: true,
//     status: 200
// }

interface accountUserInfo{
    id: number;
    name: string;
    accountNumber: number;
    accountUserName: string;
}
interface transactionAmountData extends accountUserInfo{
    transactionId: string;
    transactionAmount: number;
}
const transactionAmount: Response<transactionAmountData> ={
    data:{
        id: 22121,
        name: "Bob",
        transactionId: "bxszsqws215",
        accountUserName: "MR. Bob",
        accountNumber: 2202121313,
        transactionAmount: 2000
    },
    status: 200
}