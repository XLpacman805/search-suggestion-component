const SuggestionService = async (query) => {
    return query ? ['ham', 'sandy', 'something', query] : [];
}

export { SuggestionService }