type Gender = "Male" | "Female" | "Other" | "Private";
type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
    gender?: Gender;
}

const products: Product[] = [
    {
        id: 101,
        name: "Phone",
        price: 32000
    }
]

// function

type Add = (a: number, b: number) => number;
const add: Add = (a,b) => a + b;