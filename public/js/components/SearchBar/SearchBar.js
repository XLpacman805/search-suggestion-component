class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.suggestions = ['A', 'B', 'C'];
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
        } else {
            throw new TypeError('Suggestions needs to be an array of strings.');
        }
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
                <input type="text">
                ${this.createUL()}
            </form>
        `;
    }
}
customElements.define('jm-search-bar', SearchBar);