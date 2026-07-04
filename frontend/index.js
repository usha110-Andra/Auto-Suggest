const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    image: "./images/jane.png"
  },
  {
    name: "John Doe",
    gender: "Male",
    image: "./images/john.png"
  }
];

let curUserId = 0;

function toggle() {
  // Switch between 0 and 1
  curUserId = curUserId === 0 ? 1 : 0;

  // Update image
  document.getElementById("img").src = users[curUserId].image;

  // Update name
  document.getElementById("card-name").innerText = users[curUserId].name;

  // Update gender
  document.getElementById("card-gender").innerText = users[curUserId].gender;
}

console.log("Hello from JS");
function getRandomUser()
{
  fetch("https://randomuser.me/api")
    .then(function (data){
      return data.json()
    })
    .then(function (parsedData){
      // console.log(parsedData)
      let gender = parsedData.results[0].gender;

      let first = parsedData.results[0].name.first;
      let last = parsedData.results[0].name.last;
      let name = first  + " " + last;
      let imageUrl = parsedData.results[0].picture.large;

      // gender
      document.getElementById("card-gender").innerText=gender;
      // name
      document.getElementById("card-name").innerText=name
      // img
      document.getElementById("img").src=imageUrl

    })
}