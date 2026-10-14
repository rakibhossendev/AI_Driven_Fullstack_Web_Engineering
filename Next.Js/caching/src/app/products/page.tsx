import ProductsCard from "../components/ProductsCard/ProductCard";

export interface ProductsDataType{
    id: string;
    name: string;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: string;
    stack: string[];
    descriptions: string;
}

const ProductsDataPromise = async (): Promise<ProductsDataType[]> => {
    const response = await fetch('http://localhost:5000/products',{next:{revalidate: 5}});

    return response.json()
}

export default async function ProductData(){
    const data = await ProductsDataPromise();

    return (
        <section>
            <h2>Products : {data.length}</h2>

            <div className="grid grid-cols-3 gap-4">
                {data.map(item => <ProductsCard key={item.id} data={item}/>)}
            </div>
        </section>
    )
}