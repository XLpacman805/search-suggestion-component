class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.suggestions = [];
        this.addEventListener('input', this.handleInput);
        this.addEventListener('click', (event) => event.target.nodeName === "LI" ? this.handleListItemClick(event) : null);
        this.inputValue = '';
        this.divNode = document.createElement('div');
        this.inputNode = document.createElement('input');
        this.ulNode = this.createULNode();
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
            this.ulNode = this.createULNode();
        } else {
            throw new TypeError('Suggestions needs to be an array of strings.');
        }
    }

    /**
     * Get the current value.
     * @returns string
     */
    getInputValue() {
        return this.inputValue;
    }
    /**
     * Set value of search bar.
     * @param {string} text - The text you wish to be set and rendered to the search bar.
     */
    setInputValue(text) {
        if (typeof(text) === 'string') {
            this.inputValue = text;
        } else {
            throw new TypeError('Value must be a string');
        }
    }

    handleInput(event) {
        console.log(event.target.value);
        this.setInputValue(event.target.value);
    }

    handleListItemClick(event) {
        this.setInputValue(event.target.innerText);
        this.render();
    }

    createInputNode() {
        let input = document.createElement('input');
        input.type = 'text';
        input.value = this.getInputValue();
        return input;
    }

    createULNode() {
        let ul = document.createElement('ul');
        console.log(this.getSuggestions());
        for (const suggestion of this.getSuggestions()) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(suggestion));
            ul.appendChild(li);
        }
        return ul;
    }

    render() {
        let newDiv = document.createElement('div');
        newDiv.appendChild(this.createInputNode());
        newDiv.appendChild(this.createULNode());

        if (this.hasChildNodes()) {
            const oldDiv = this.childNodes[0];
            oldDiv.replaceWith(newDiv);

        } else {
           this.appendChild(newDiv);
        }
    }
}
customElements.define('jm-search-bar', SearchBar);
export { SearchBar }