function SearchBarResults({ suggestions = [], query, onSuggestionClick = () => {} }) {

    if (suggestions.length === 0 || query.trim() === "") {
        return null;
    }

    const [activeIndex, setActiveIndex] = React.useState(-1);

    function handleSuggestionClick(label) {
        console.log('Suggestion clicked:', label);
        if (typeof onSuggestionClick === 'function') {
            onSuggestionClick(label);
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'ArrowDown') {
            setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
            e.preventDefault();
        } else if (e.key === 'ArrowUp') {
            setActiveIndex((prev) => Math.max(prev - 1, 0));
            e.preventDefault();
        } else if (e.key === 'Enter' && activeIndex >= 0) {
            handleSuggestionClick(suggestions[activeIndex].label);
            e.preventDefault();
        }
    }

    return (
        <ul
            role="listbox"
            tabIndex={0}
            aria-activedescendant={activeIndex >= 0 ? suggestions[activeIndex].id : undefined}
            onKeyDown={handleKeyDown}
        >
            {suggestions.map((suggestion, idx) => (
                <li
                    key={suggestion.id}
                    id={suggestion.id}
                    className={`p-2 hover:bg-gray-100 text-black border-b border-gray-200${activeIndex === idx ? ' bg-gray-200' : ''}`}
                    role="option"
                    aria-selected={activeIndex === idx}
                    tabIndex="0"
                    onClick={() => handleSuggestionClick(suggestion.label)}
                    onMouseEnter={() => setActiveIndex(idx)}
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: suggestion.label.replace(
                                new RegExp(`(${query})`, 'gi'),
                                '<strong>$1</strong>'
                            ),
                        }}
                    />
                </li>
            ))}
        </ul>
    );
}
