const userData = 
    [
  { "id": 1, "name": "Alex Mercer", "email": "alex.mercer@example.com", "role": "Admin" },
  { "id": 2, "name": "Jordan Blake", "email": "jordan.blake@example.com", "role": "User" },
  { "id": 3, "name": "Taylor Swift", "email": "taylor.swift@example.com", "role": "Moderator" },
  { "id": 4, "name": "Morgan Freeman", "email": "morgan.f@example.com", "role": "User" },
  { "id": 5, "name": "Casey Jones", "email": "casey.j@example.com", "role": "User" },
  { "id": 6, "name": "Sam Wilson", "email": "sam.wilson@example.com", "role": "Moderator" },
  { "id": 7, "name": "Chris Evans", "email": "chris.e@example.com", "role": "Admin" },
  { "id": 8, "name": "Robin Hood", "email": "robin.h@example.com", "role": "User" },
  { "id": 9, "name": "Skyler White", "email": "skyler.w@example.com", "role": "User" },
  { "id": 10, "name": "Jesse Pinkman", "email": "jesse.p@example.com", "role": "User" },
  { "id": 11, "name": "Walter White", "email": "walter.w@example.com", "role": "Admin" },
  { "id": 12, "name": "Tony Stark", "email": "tony.stark@example.com", "role": "Moderator" },
  { "id": 13, "name": "Bruce Banner", "email": "bruce.b@example.com", "role": "User" },
  { "id": 14, "name": "Natasha Romanoff", "email": "natasha.r@example.com", "role": "Admin" },
  { "id": 15, "name": "Clint Barton", "email": "clint.b@example.com", "role": "User" }
]

const userFinder = (userObject,id) => {
    let finededUser = userObject.find((value)=> value.id === id);
    return finededUser;
}

console.log(userFinder(userData,1));