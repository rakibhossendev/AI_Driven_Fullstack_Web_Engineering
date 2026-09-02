import WelcomeCard from "./components/WelcomeCard"
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import ProductCard from "./components/ProductsCard";
import type { UserProfileType,ProductType } from "./components/Types";


function App() {
	const userInfo: UserProfileType = {
		name: "Meghla",
		age: 15,
		favorite: ["Coding","Drawing"]
  	}
	const products: ProductType[] = [
		{productName: "Watch",price: 3000,isStack: true},
		{productName: "Laptop",price: 30000,isStack: false}
	]

	return (
		<>
			<WelcomeCard></WelcomeCard>
			<Footer></Footer>
			<ProfileCard name={userInfo.name} age ={userInfo.age} favorite={userInfo.favorite}></ProfileCard>
			<ProductCard products={products}></ProductCard>
    </>
	)
}


export default App;
