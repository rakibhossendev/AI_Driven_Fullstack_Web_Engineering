import Link from "next/link";

export interface UserDataType{
    id: number;
    name: string;
    username: string;
    phone: string;
    website: string
}

export default async function UserPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: UserDataType[] = await response.json()

    return (
        <div>
            <h2>Total Users: {data.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    data.map(user  => <div key={user.id} className="card card-border bg-base-100 w-96">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <h2>{user.username}</h2>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`}>
                                <button className="btn btn-primary">Show More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                 )
                }
            </div>
        </div>
    )
}