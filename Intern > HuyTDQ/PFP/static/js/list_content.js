import { mock_data } from "./data.js";

var data = localStorage.getItem("data") !== null ? JSON.parse(localStorage.getItem("data")) : mock_data;
const items = data.map(item => {
    return `
        <div class="user-cards">
            <img src="${item.preview_pic}" alt="" class="card-image">
            <div class="card-content">
                <div class="card-middle">
                    <h3>${item.title}</h3>
                    <h2>${item.scores}</h2>
                </div>
                <div class="card-bottom">
                    <button class="btn-primary myBtn" type="button">Read more</button>
                    </a>
                </div>
            </div>
            <div class="myModal modal">
                <div class="modal-content">
                    <span class="close">×</span>
                    <div class="page-header">
                        <div class="page-banner">
                            <img src="${item.detail.background_pic}" alt="">
                        </div>
                        <div class="header-container">
                            <div class="profile">
                                <div class="profile-img">
                                    <img src="${item.detail.profile_pic}" alt="">
                                </div>
                                <div class="profile-inform">
                                    <p>scores</p>
                                    <i>like</i>
                                </div>
                            </div>
                            <div class="header-content">
                                <h1>Claymore</h1>
                                <div class="video-preview">
                                    <h2>Preview</h2>
                                    <iframe src="${item.detail.preview_vid}"></iframe>
                                </div>
                                <div class="author">
                                    <p>Mangaka: ${item.detail.mangaka}</p>
                                </div>
                                <a href="${item.link_direct}?id=${item.id}">
                                    <button class="btn-primary" type="button">Detail</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
});

let list_manga = document.getElementById('page-content-list');
var loader = document.querySelector('.loader');
//load simulation
var load = () => {
    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000)
    list_manga.innerHTML = items.join("");
}
//
window.onload(load());





