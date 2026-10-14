import { ProductsDataType } from "@/app/products/page"
import Link from "next/link";

interface ProductsDataTypeProps{
    data: ProductsDataType;
}

export default function ProductsCard({data}: ProductsDataTypeProps) {
    return (
        <div className="card card-dash bg-base-100">
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>

                    <Link href={`/products/${data.id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}