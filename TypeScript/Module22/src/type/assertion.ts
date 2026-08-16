let value: unknown;

let myValue = value as string;
const uppi = myValue.toUpperCase();

let data: unknown;
interface User{
    name: string;
    email: string
}

const userData = data as User;
userData.email = "abc";
userData.name = "Meghla";

// as constant

const Meghla = {
    name: "MST. MAFUZA KHATUN",
    email: "mafuzabou@gmail.com",

} as const;

