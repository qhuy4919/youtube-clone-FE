import { mock_data }  from "./data.js";
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
                    <a href="${item.link_direct}?id=${item.id}">
                        <button class="btn-primary myBtn" type="button">Read more</button>
                    </a>
                </div>
            </div>
            <div class="myModal modal">
            <!-- Nội Dung Modal -->
                <div class="modal-content">
                <span class="close">×</span>
                <p></p>
            </div>
         </div>
        </div>
  
    `
});

let list_manga = document.getElementById('page-content-list');
list_manga.innerHTML = items.join("");

