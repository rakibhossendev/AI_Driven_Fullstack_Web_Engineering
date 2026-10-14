import { Suspense } from "react";
import PostsCard from "./PostsCard";

export interface PostsDataType{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function PostsPage(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: PostsDataType[] = await response.json()

    console.log(data)

    return (
        <section >
            <p>Total Posts: {data.length}</p>

            <div className="grid grid-cols-3 gap-4 mt-4">

                {
                data.map(item => 
                   <Suspense key={item.id} fallback={<p>Data Loading....</p>}>
                       <PostsCard key={item.id} data={item}/>
                   </Suspense> 
                    )
                }
            </div>

        </section>
    )

}