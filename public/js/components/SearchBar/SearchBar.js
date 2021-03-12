class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.suggestions = [];
        this.addEventListener('input', this.handleInput);
        this.value = "";
    }

    connectedCallback() {
        this.render();
    }

    /**
     * Get suggestions list.
     * @returns array<string>
     */
    getSuggestions() {
        return this.suggestions;
    }

/**
 * set suggestion list.
 * @param {Array<string>} suggestions - A list of suggestions to be displayed.
 * @returns {void}
 */
    setSuggestions(suggestions) {
        if (Array.isArray(suggestions) && suggestions.every(element => typeof(element) === "string")) {
            this.suggestions = suggestions;
            this.render();
        } else {
            throw new TypeError('Suggestions needs to be an array of strings.');
        }
    }

    /**
     * Get the current value.
     * @returns string
     */
    getValue() {
        return this.value;
    }
    /**
     * Set value of search bar.
     * @param {string} text - The text you wish to be set and rendered to the search bar.
     */
    setValue(text) {
        if (typeof(text) === 'string') {
            this.value = text;
            this.render();
        } else {
            throw new TypeError('Value must be a string');
        }
    }

    handleInput(event) {
        console.log(event.target.value);
        this.value = event.target.value;
    }

    createUL() {
        return `
            <ul>
                ${this.suggestions.map(suggestion => '<li>' + suggestion + '</li>').join('')}
            </ul>
        `;
    }

    render() {
        // Create input field
        // Create dropdown suggestions
        this.innerHTML = `
            <form>
                <input type="text" value=${this.value}>
                ${this.createUL()}
            </form>
        `;
    }
}
customElements.define('jm-search-bar', SearchBar);
export { SearchBar }