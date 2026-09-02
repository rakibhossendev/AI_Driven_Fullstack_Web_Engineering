import type { UserProfileType } from "./Types";

export default function ProfileCard({name,age,favorite}: UserProfileType){
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Favorite: {favorite.map(item => <li>{item}</li>)}</p>
        </div>
    )
}