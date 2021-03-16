import { SuggestionService } from './services/SuggestionService.js';
import { Throttle } from './utility/throttle.js';
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
    if (event.target.tagName === 'LI') {
        suggestionSearchBarInput.value = event.target.innerText;
    }
}

suggestionSearchBar.addEventListener('input', Throttle(handleInput, 300));
suggestionSearchBar.addEventListener('click', handleClick);
