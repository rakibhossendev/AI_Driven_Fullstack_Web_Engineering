import { PostsDataType } from "./Posts"

interface PostsDataTypeProps{
    data: PostsDataType;
}

export default function PostsCard({data}: PostsDataTypeProps){

    return (
        <div className="p-4 bg-green-white border-2 border-green-500 shadow  rounded">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-xl text-semibold">{data.body}</p>
        </div>
    )
}