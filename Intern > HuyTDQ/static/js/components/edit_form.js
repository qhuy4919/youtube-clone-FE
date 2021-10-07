import { mock_data } from "../data.js";
var url = new URL(window.location.href);
var id = url.searchParams.get('id');
//
var data = mock_data.find( obj =>{
    return obj.id == id;
});
const render = (data) => {
    return `
    <div class="title">Edit manga</div>
    <p class="error-message active"></p>
    <form action="" class="adding-manga-form">
        <input type="text" placeholder="ID" id="id" value=${data.id}>
        <input type="text" placeholder="title" id="title" value=${data.title}">
        <input type="text" placeholder="scores" id="scores" value=${data.scores}>
        <input type="text" placeholder="avatar" id="preview_pic" value=${data.preview_pic}>
        <input type="text" placeholder="background image" id="background_pic" value=${data.detail.background_pic}>
        <input type="text" placeholder="vols" id="vols" value=${data.detail.vols}>
        <input type="text" placeholder="mangaka" id="mangaka" value=${data.detail.mangaka}>
        <textarea name="" id="mangaka" cols="30" rows="10" placeholder="content">
            ${data.detail.content}
        </textarea>

        <button type="submit" class="btn-submit">Submit</button>
    </form>
    `

}
const edit_data = (id) => {
    
}
//form-container
var form = document.querySelector('.form-container');
form.innerHTML = render(data);
