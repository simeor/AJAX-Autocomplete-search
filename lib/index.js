// TODO: Autocomplete the input with AJAX calls.
const search = document.getElementById('search');
const results = document.getElementById('results');
let keyword = "";

search.addEventListener('input', updateValue);

function updateValue(e) {
  keyword = e.target.value;
  keyword.length > 0 ? searchAPI() : null;
  results.innerHTML = "";
}

function searchAPI() {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${keyword}`)
    .then(res => res.json())
    .then((data) => {
      const wordsArray = data.words;
      let top5 = (wordsArray.slice(1, 5).reverse());
      results.innerHTML = "";

      top5.forEach((word) => {
        const listItem = `<li><h4>${word}</h4></li>`;
        results.insertAdjacentHTML('beforeend', listItem);
      });
    });
  }
