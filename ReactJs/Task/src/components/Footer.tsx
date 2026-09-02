export default function Footer(){
    const year = new Date().getFullYear()
    return (
        <div>
            <p>{year} all copyright reserved.</p>
        </div>
    )
}