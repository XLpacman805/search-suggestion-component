import { SearchBar } from './components/SearchBar/SearchBar.js';

class App extends HTMLElement {
    constructor() {
        super();
        this.docFrag = new DocumentFragment();
    }

    connectedCallback() {
        this.createSearchBar();
        this.render();
    }

    createSearchBar() {
        const searchBar = new SearchBar();
        searchBar.setSuggestions(['one', 'two', 'three']);
        this.docFrag.appendChild(searchBar);
    }

    render() {
        this.appendChild(this.docFrag);
    }
}
customElements.define('jm-app', App);