let list_manga = document.getElementById('section');

let mock_data = [
    {
        id: 0,
        img: '../static/media/list_post/post0',
        conten: 'New content'
    },
    {
        id: 1,
        img: '../static/media/list_post/post1',
        conten: 'New content'
    },
    {
        id: 2,
        img: '../static/media/list_post/post2',
        conten: 'New content'
    },
    {
        id: 3,
        img: '../static/media/list_post/post3',
        conten: 'New content'
    },
    {
        id: 4,
        img: '../static/media/list_post/post4',
        conten: 'New content'
    },
    {
        id: 5,
        img: '../static/media/list_post/post5',
        conten: 'New content New content New content New content New content New content'
    }
];

const items = mock_data.map(item => {
    return `
        <div class="user-cards">
            <img src="${item.img}" alt="" class="card-image">
            <div class="card-content">
                <h3>Content here</h3>
            </div>
            <div class="card-footer">
                <a href="./page/content/content.html"><button type="button">Read more</button></a>
            </div>
        </div>
    `
})
list_manga.innerHTML = items.join("");