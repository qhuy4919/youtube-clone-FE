import { mock_data }  from "./data.js";

const items = mock_data.map(item => {
    return `
        <div class="user-cards">
            <img src="${item.preview_pic}" alt="" class="card-image">
            <div class="card-content">
                <div class="card-middle">
                    <h3>${item.title}</h3>
                    <h2>${item.scores}</h2>
                </div> 
                <div class="card-bottom">
                <a href="${item.link_direct}?id=${item.id}"><button type="button">Read more</button></a>
            </div>
            </div>
            
        </div>
    `
});
let list_manga = document.getElementById('page-content-list');
list_manga.innerHTML = items.join("");