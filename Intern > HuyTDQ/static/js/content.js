import { mock_data } from "./data.js";
// render data
var url = new URL(window.location.href);
var id = url.searchParams.get('id');
var data = mock_data.find(obj => {
    return obj.id == id;
})
function render(data){
    return `
            <div class="page-header">
            <div class="page-banner">
                <img src="${data.detail.background_pic}" alt="">
            </div>
            <div class="header-container">
                <div class="profile">
                    <div class="profile-img">
                        <img src="${data.detail.profile_pic}" alt="">
                    </div>
                    <div class="profile-inform">
                        <i>like</i>
                    </div>
                </div>
                <div class="header-content">
                    <h1>${data.title}</h1>
                    <p class="description">
                        ${data.detail.content}
                    </p>
                    <div class="author">
                        <p>Author: ${data.author}</p>
                    </div>
                </div>
            </div>
            <div class="btn-edit">
                <a href="../../form/edit_form.html?id=${data.id}"> <i class="fas fa-edit"></i></a>
             </div>
        </div>

        <div class="page-content">
            <div class="common-content">
                <div class="common-content__items">
                    <p>chappter</p>
                    <p>${data.detail.vols}</p>
                </div>
                <div class="common-content__items">
                    <p>status</p>
                    <p>${data.detail.status}</p>
                </div>
                <div class="common-content__items">
                    <p>start date</p>
                    <p>${data.detail.start_date}</p>
                </div>
                <div class="common-content__items">
                    <p>end date</p>
                    <p>${data.detail.end_data}</p>
                </div>
                <div class="common-content__items">
                    <p>mangaka</p>
                    <p>${data.detail.mangaka}</p>
                </div>
            </div>
            <div class="overview">
                <div class="video-preview">
                    <h2>Preview</h2>
                    <iframe src="https://www.youtube.com/embed/t_i_Dq2GjAI"></iframe>
                </div>
                <div class="Characters">
                    
                </div>
            </div>
        </div>
        `
}

let container = document.getElementById('page-container');
container.innerHTML = render(data);