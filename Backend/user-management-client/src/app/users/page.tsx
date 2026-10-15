import { Suspense} from "react";
import UserCard from "../components/UserCard/UerCard";

export interface UsersDataType {
    id: number;
    name: string;
    email: string;
}

const userDataPromise = async (): Promise<UsersDataType[]> => {
    const response = await fetch('http://localhost:5000/users');

    return response.json();
}

export default function Users() {

    return (
        <section>
            <div className="grid-cols-3 gap-4">
                <Suspense fallback={<p>Loading data..</p>}>
                    <UserCard userDataPromise={userDataPromise()}></UserCard>
                </Suspense>
            </div>
        </section>
    )
}