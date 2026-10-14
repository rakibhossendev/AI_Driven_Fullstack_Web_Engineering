import { ProductsDataType } from "../page";

interface staticParamsType{
    productId: string;
}

export const generateStaticParams = async():Promise<staticParamsType[]> => {
    const response = await fetch(`http://localhost:5000/products/`);
    const data: ProductsDataType[] = await response.json();
    return data.slice(0,2).map(item => ({productId: item.id}))
}

export default async function ProductDetails({params,}:{params:Promise<{productId: string}>}){
    const {productId} = await params
    
    const response = await fetch(`http://localhost:5000/products/${productId}`,{next:{revalidate: 100}});
    const data: ProductsDataType = await response.json()

    return (
        <div>
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <p className="text-md text-semibold">{data.descriptions}</p>

            <ul>
                {data.stack.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}