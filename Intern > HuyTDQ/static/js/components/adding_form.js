
import { mock_data } from "../data.js";
//get data from form
const form = document.querySelector('.add-manga-form');
const input = document.querySelectorAll('form input[type=text]')
const message = document.querySelector('.error-message');
var add_data = (data) => {
    mock_data.forEach(element => {
        if(element.id === data.id) return;
    });
    console.log(data);
    mock_data.push(data);
    message.innerHTML = "succesful";
    localStorage.setItem("data", JSON.stringify(mock_data));
}  


form.addEventListener('submit',  (e) => {
    e.preventDefault();
    message.innerHTML = "";
    let data = {};
    for(let i of input){
        if(i.value !== ""){
            data[i.id] = i.value
        }
        else{
            message.innerHTML = "Something's wrong with your data";
        }
    }
    console.log("OK");
    add_data(data);
})


