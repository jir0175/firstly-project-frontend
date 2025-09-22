const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const films = [
    {
        id: 0;
        title: 'Марсианин',
        original: 'The Martian  2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        image: './images/Картинка.png',
        link:'./film.html',
    },
    {
        id: 1;
        title: 'Марсианин',
        original: 'The Martian  2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        image: './images/Картинка.png',
        link:'./film.html',
    },
    {
        id: 2;
        title: 'Марсианин',
        original: 'The Martian  2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        image: './images/Картинка.png',
        link:'./film.html',
    }
]
const render = (array) => {
    cardWrapper.innerHTML = ''
    films.forEach((item) => {
        cardWrapper.insertAdjacentElement('beforeend', `
            <a href="${item.link}" class="content-cards_item">
                                <div class="content-cards_item--img">
                                    <img src=${item.image} alt="Обложка">
                                </div>

                                <div class="content-cards_item--title">
                                    <h5>${item.title},</b></h5>
                                    <span>${item.original}</span>
                                </div>
                                <p class="content-cards_item_description">
                                    ${item.category}
                                </p>
                                <p class="content-cards_item--rating">
                                    ${item.rating}
                                </p>
                            </a>
            `)
    })
}
searchButton.addEventListener('click',()=>{
    render(films.filter((item)=>
        item.title.includes(searchInput.value)
    
    ))


})
render(films)
