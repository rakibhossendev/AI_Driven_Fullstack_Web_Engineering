// import AddCart from './Cart'
// import Counter from './Counter'
// import Batter from './Batter'
// import SocialMediaReactionCounter from './SocialMediaReactionCount'
import './App.css'
import ToDos from './ToDos';
import Users from './UserAPI'
import { Suspense } from 'react'
// import UserCard from './UserCard';

const userData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	return data;
}

function App() {

	

	// const clickButton = () => {
	// 	console.log("Hello World");
	// }

	// function addToCart(id: number) {
	// 	alert(`Add Product ${id}`)
	// }
	return (
		<>
			<ToDos></ToDos>
			{/* <Suspense fallback={<h2>Loading Data......</h2>}>
				<UserCard userData = {userData()}></UserCard>
			</Suspense> */}
			<Suspense fallback={<p>Loading....</p>}>
				<Users userData = {userData()}></Users>

			</Suspense>
			{/* <SocialMediaReactionCounter></SocialMediaReactionCounter> */}
			{/* <Counter></Counter>
			<Batter></Batter> */}
			{/* <AddCart></AddCart> */}
			{/* <button onClick={clickButton}>Click Me!!</button>
			<button onClick={() => alert("Clicked Button 2")}>Click Me 2</button>
			<button onClick={()=> addToCart(10)}>Add Cart</button> */}
		</>
	)
}

export default App
