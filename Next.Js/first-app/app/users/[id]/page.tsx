import { UserDataType } from "../page";

export default async function UserDetails({ params, }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data: UserDataType[] = await response.json()
    console.log(id,data)
    const userData = data.find(item => item.id === Number(id));
    return (
        <div>
            <h2>User Details Page</h2>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{userData?.name}</h2>
                    <p>{userData?.username}</p>
                    <p>{userData?.phone}</p>
                    <p>{userData?.website}</p>
                </div>
            </div>
        </div>
    )

}