const user = {
  name: "Ryan",
  lastname: "Ray",
  age: 20,
  nickname: "Rayn123",
  hobbies: ["run", "code", "eat"],
  address: {
    city: "New York",
    Street: "123 Sesame Street",
  },
  married: false,
  greet() {
    return "Hello";
  },
};

const friends = [
  { name: "Joe", nichname: "joe123" },
  { name: "Marcos", nichname: "marcos123" },
  { name: "Juan", nichname: "juan123" },
  { name: "Jose", nichname: "jose123" },
];

console.log(user); // Muestra el objeto JS

console.log(user.name);
console.log(user.hobbies);
console.log(user.address);
console.log(user.greet());

user.friends = friends; //Agrega la propiedad friends al objeto user

let output = "";

for (let i = 0; i < friends.length; i++) {
  output = output + `<li>${friends[i].name} - ${friends[i].nichname}</li>`;
}

fetch('./user.json')
    .then(response => response.json())
    .then(data => document.getElementById("people").innerHTML = `<h1>${data.lastname}</h1>`)

document.getElementById("people").innerHTML = output;

let postElements = "";


console.log(JSON.stringify(user)); //Convierte al objeto JSON Válido, quita los formatos no válidos de Json como las funciones
console.log(JSON.stringify(friends));

//lo contrario de stringify es parse

//Hacer una petición de un json desde otro servidor

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            postElements += `<li>${data[i].userId} - ${data[i].title}</li>`            
        }

        document.getElementById("posts").innerHTML = postElements

    })
    
    
