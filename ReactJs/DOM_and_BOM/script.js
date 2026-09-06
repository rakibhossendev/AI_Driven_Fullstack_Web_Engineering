

// const bdText = document.getElementById("bd-text");
// console.log(bdText);
// const h2 = document.getElementsByTagName('h2');
//console.log(h2); */
// const img = document.querySelector("#image")

// console.log(bdText.textContent);
// console.log(bdText.innerHTML)

// bdText.innerText = "Hi, Meghla"

// console.log(img.getAttribute("src"))
// img.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/068/821/745/small/serene-landscape-featuring-a-solitary-tree-by-a-reflective-lake-with-a-majestic-mountain-backdrop-photo.jpg")

// img.classList.add("box")

// document.querySelector("#btn").addEventListener("mouseenter",()=> {
//     img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlldVj4xMMXebMISRYbqTasjXjzCrWAjDcC6141HPN9WkiXBH3OHW76rM&s=10")
// })

document.querySelector("#my-inp").addEventListener("keypress", (event)=> {
    // console.log("trigged")
    // console.log(document.querySelector('#my-inp').value)
    // console.log(event.target)
    const data = event.target.value
    event.target.style.color = "green"

    localStorage.setItem("Value",data)
    document.querySelector("#message").innerHTML = `Data: ${localStorage.getItem("Value")}`
})

// document.querySelector("#reload").addEventListener("click", (event)=> {
//     location.reload()
// })


localStorage.setItem("name","MST. MAFUZA KHATUN.")
localStorage.setItem("age",18);

const studentFullName = localStorage.getItem("name");
const studentAge = localStorage.getItem("age");

document.querySelector("#name").textContent = `Name: ${studentFullName}`;
document.querySelector("#age").innerHTML = `Age: ${studentAge}`;

localStorage.removeItem("age")