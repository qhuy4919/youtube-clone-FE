import { mock_data } from "../data.js";
var url = new URL(window.location.href);
var id = url.searchParams.get('id');
//
var data = mock_data.find( obj =>{
    return obj.id == id;
});
//display
const render = (data) => {
    return `
    <div class="title">Edit manga</div>
    <p class="message"></p>
    <form action="" class="edit-manga-form">
        <input type="text" placeholder="avatar" id="profile_pic" value=${data.detail.profile_pic}>
        <input type="text" placeholder="background image" id="background_pic" value=${data.detail.background_pic}>
        <input type="text" placeholder="vols" id="vols" value=${data.detail.vols}>
        <input type="text" placeholder="mangaka" id="mangaka" value=${data.detail.mangaka}>
        <textarea name="" id="content" cols="30" rows="10" placeholder="content">
            ${data.detail.content}
        </textarea>

        <button type="submit" class="btn-submit">Submit</button>
    </form>
    `

}
//form-container
var form = document.querySelector('.form-container');
form.innerHTML = render(data);

//edit data
var input = document.querySelectorAll('form input[type=text]');
var textarea = document.querySelectorAll('form textarea')
var message = document.querySelector('.message');
form.onsubmit = (e) => {
    e.preventDefault();
    const x = edit_data();
    //replace_data
    for(let i in x){
        mock_data[id].detail[i] = x[i];

    }
    localStorage.setItem("new_data", JSON.stringify(mock_data));
    message.classList.add("success-message");
    message.innerHTML = "succesful";
    
}
function edit_data(){
    let new_data = {};
    input.forEach(element => {
        new_data[element.id] = element.value;
    })
    textarea.forEach(element => {
        new_data[element.id] = element.value;
    })
    return new_data;
}


