import './App.css'

function App() {

  return (
    <>
	<Student name="MST. MAFUZA KHATUN" gpa="3.57" age="19"></Student>
	<Student name="RAKIB HOSSEN" gpa="3.50" age="18"></Student>
    </>
  )
}

function Student(props: string,gpa: string, age: number){

	const studentStyle = {
		border: "2px solid red",
		borderRadius: "5px",
		background: "green",
		color: "white"
	}
	return (
		<div style={{
			border: "2px solid gray",
			borderRadius: "5px",
			background: "black",
			color: "white"
		}}>
			<h3>Name: {props.name}</h3>
			<p>Age: {props.age}</p>
			<p>GPA: {props.gpa}</p>
		</div>
	)
}
export default App


function add(num1: number,num2: number): number{
	return num1 + num2
}
const total = add(10,20)
console.log(total)