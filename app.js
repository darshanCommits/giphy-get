const giphyAPI = "bOTCrrbO2xFHrUNSe4znl7x8mmTRLWtn";
const img = document.querySelector("img");

const submitBtn = document.querySelector("#btn__submit");
const query = document.querySelector("#search__bar");
let searchQuery;

//////////// THE PROMISE WAY ////////////////
// const getImg = queryString => {
//   const fetchURL = `https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${searchQuery}`

//   fetch(fetchURL, { mode: "cors" })
//     .then(res => res.json())
//     .then(res => img.src = res.data.images.original.url)
// }


//////////// THE ASYNC/AWAIT WAY ////////////////

const getImg = async (queryString) => {
  const fetchURL = `https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${searchQuery}`

  const response = await fetch(fetchURL, { mode: "cors" });
  const resData = await response.json();
  img.src = resData.data.images.original.url
}


// EVENT LISTENERS

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchQuery = query.value;
  getImg(searchQuery);
})

