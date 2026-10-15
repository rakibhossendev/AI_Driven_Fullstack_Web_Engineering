import { UsersDataType } from "@/app/users/page";
import { use } from "react";

interface UserCardProps{
    userDataPromise: Promise<UsersDataType[]>
}

export default function UserCard({userDataPromise}: UserCardProps){
    const usersData = use(userDataPromise)
    return (
        <section>
            <div className="bg-gray-400 shadow-sm rounded px-2 py-8">
               {usersData.map(item => 
                    <div key={item.id}>
                        <p>Id: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                    </div>

               )}
            </div>
        </section>
    )
}