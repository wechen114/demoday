let usernameElement = document.querySelector("#username");
let imageElement = document.querySelector("#image");
let button = document.querySelector("#submitButton");
// Set database object REFERENCE here:
let database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let username        = usernameElement.value;
    // let image         = imageElement.value;
    usernameElement.value = "";
    // imageElement.value  = "";
    console.log(username );
    // Update database here
let value = {
NAME: username,
// IMAGE: image,
}
database.push(value);

}
database.on("child_added", addImageToBoard);

function addImageToBoard(rowdata){

let row = rowdata.val();
let name = row.NAME;
// let msg = row.IMAGE;
let appear = document.createElement("p");
appear.innerHTML = name ;
let div = document.querySelector(".allImages");
div.appendChild(appear);

}