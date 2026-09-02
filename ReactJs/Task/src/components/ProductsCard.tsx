import type { ProductType} from "./Types";

type ProductTypePop = {
    products: ProductType[]
}
export default function ProductCard({products}: ProductTypePop){
    if((products.some(item => item.isStack))){
        return (
            <div>
                <p>Product Name: {products.map(item => <li>{item.productName}</li>)}</p>
                <p>Price: {products.map(product => <li>{product.price}</li>)}</p>
            </div>
        )
    }

    return
}