import "./UserCard.css"

export default function UserCard({user}){
    return (
        <div className="userCard">
            <h2>Name: {user.name}</h2>
        </div>
    )
}