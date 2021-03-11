class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `HELLO WORLD`;
    }
}
customElements.define('jm-search-bar', SearchBar);