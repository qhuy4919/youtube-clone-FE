
import { mock_data } from "../data.js";
//get data from form
const form = document.querySelector('.add-manga-form');
const input = document.querySelectorAll('form input[type=text]')
const message = document.querySelector('.message');
var add_data = (data) => {
    mock_data.forEach(element => {
        if(element.id === data.id) return;
    });
    mock_data.push(data);
    message.classList.add("success-message");
    message.innerHTML = "succesful";
    localStorage.setItem("data", JSON.stringify(mock_data));
}  


form.addEventListener('submit',  (e) => {
    e.preventDefault();
    message.innerHTML = "";
    let data = {};
    for(let i of input){
        if(i.value === "" || i.value === undefined){
            message.classList.add("error-message");
            message.innerHTML = "Something's wrong with your data";
            return;
        }
        data[i.id] = i.value
    }
    add_data(data);
})


