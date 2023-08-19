const giphyAPI = "bOTCrrbO2xFHrUNSe4znl7x8mmTRLWtn";
const img = document.querySelector("img");

const submitBtn = document.querySelector("#btn__submit");
const query = document.querySelector("#search__bar");
let searchQuery;

const getImg = queryString => {
  const fetchURL = `https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${searchQuery}`

  fetch(fetchURL, { mode: "cors" })
    .then(res => res.json())
    .then(res => img.src = res.data.images.original.url)
}

img.src = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1539&q=80";

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchQuery = query.value;
  getImg(searchQuery);
})

console.log(query.value);