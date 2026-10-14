export interface PostDataType{
    userId: number;
    id: number;
    title: string;
    body: string;
}

const postsDataPromise = async ():Promise<PostDataType[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json()
}

export default async function Posts(){
    const data = await postsDataPromise()

    return (
        <div>
            <p>Total Posts Data: {data.length}</p>

        </div>
    )
}