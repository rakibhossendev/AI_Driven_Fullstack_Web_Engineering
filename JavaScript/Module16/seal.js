const bankAccount = {
    accountNumber: "322112",
    blance: 5000
}
Object.seal(bankAccount);

delete bankAccount.accountNumber;
bankAccount.blance = 600;
bankAccount.accountHolderName = "abc";
console.log(bankAccount)