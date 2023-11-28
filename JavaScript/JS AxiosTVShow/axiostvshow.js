// Axios API 이용해서 TV Show 검색해서 이미지 띄우기
const form = document.querySelector('#searchForm')
let count = 0;
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    resetImg();
    for (result of shows) {
        if (result.show.image) {
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
            count++;
        }
    }
}


function resetImg() {
    for (let i = 0; i < count; i++) {
        const imgs = document.querySelector('img')
        imgs.remove();
    }
    count = 0;
}
