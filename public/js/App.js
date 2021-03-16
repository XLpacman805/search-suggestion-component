import { SuggestionService } from './services/SuggestionService.js';
const suggestionSearchBar = document.getElementById('search-suggestion-bar');
const suggestionSearchBarList = suggestionSearchBar.children[1];
const suggestionSearchBarInput = suggestionSearchBar.children[0];
const createListItemsHTML = (collection) => {
    if (Array.isArray(collection) && collection.every(element => typeof(element) === 'string')) {
        return collection.map(text => `<li> ${text} </li>`).join('');
    }
    return '';
}

const handleInput = (event) => {
    // query suggestion service (throttle it somehow)
    if (event.target.value) {
        SuggestionService(event.target.value)
            .then(data => {
                suggestionSearchBarList.innerHTML = createListItemsHTML(data);
            })
            .catch(err => console.error(err));
    } else {
        suggestionSearchBarList.innerHTML = '';
    }
}

const handleClick = (event) => {
    // Set the input value to the click results.
}


suggestionSearchBar.addEventListener('input', handleInput);
suggestionSearchBar.addEventListener('click', (event) => console.log(event));
