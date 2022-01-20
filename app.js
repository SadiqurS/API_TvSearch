// const form = document.querySelector("#searchForm");
// form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     const searchTerm = (form.elements.query.value)
//     const res = await axios.get(` https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`)
//     makeImg(res.data)
// })

// const makeImages = (shows) => {
//     for(let result of shows){
//         if(result.show.image){
//             const img = document.createElement("IMG")
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }

//better version that clears previous search
const form = document.querySelector('#searchForm');
const container = document.getElementById('container');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    container.innerHTML = '';
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.getElementById("container").appendChild(img)
        }
    }
}

