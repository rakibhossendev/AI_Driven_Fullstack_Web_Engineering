import Counter from "../components/Counter/Counter"
import PostsPage from "../components/Posts/Posts"

export default function DashboardPage (){
    console.log("Dashboard Page rendered")
    return (
        <section>
            <Counter/>

            <PostsPage></PostsPage>
            {/* <ul>
                <li>Dashboard item 1</li>
                <li>Dashboard item 2</li>
                <li>Dashboard item 3</li>
            </ul> */}
        </section>
    )
}