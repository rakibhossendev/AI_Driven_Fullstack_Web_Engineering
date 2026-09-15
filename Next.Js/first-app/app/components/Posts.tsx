import Link from "next/link";
import { BlogsType } from "../blog/page";

interface DataProps {
    data: BlogsType;
}

const Posts = ({ data }: DataProps) => {
    const { id, title, description } = data;
    return (
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/blog/${id}`}>
                        <button className="btn btn-primary">Show More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Posts;