const form = document.querySelector('.form')
const searchInput = document.querySelector('.search')

const requestGiphyApi = async(searchValue) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YuKrns4q8ED9WLcLUO8Xyw5Z6VxWrldc&limit=1&q=[${searchValue}]`
    const giphyApiResponse = await axios(url)
    const giphyApiData = giphyApiResponse.data
    loadGif(giphyApiData)
  } catch(error) {
    console.log(error)
  }
}

const loadGif = gif => {
  const { data: [{ images: { original: { url } } }]} = gif

  const output = document.querySelector('.out')
  
  const img = document.createElement('img')
  img.src = url
  
  output.insertBefore(img, output.firstChild)
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  requestGiphyApi(searchInput.value)
})
