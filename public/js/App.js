import { SearchBar } from './components/SearchBar/SearchBar.js';

class App extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    createSearchBar() {
        const searchBar = new SearchBar();
        searchBar.setSuggestions(['one', 'two', 'three']);
        return searchBar;
    }

    render() {
        this.appendChild(this.createSearchBar());
    }
}
customElements.define('jm-app', App);