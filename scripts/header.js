function AppHeader() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchSuggestions, setSearchSuggestions] = React.useState([]);
    const searchClassName = "bg-white text-black rounded-full";
    const navLinks = [
        {
            icon: <SvgIcon name="user" />,
            label: "Account",
            href: "/account"
        },
        {
            icon: <SvgIcon name="favourite" />,
            label: "Wishlist",
            href: "/wishlist"
        },
        {
            icon: <SvgIcon name="shopping-bag" />,
            label: "Cart",
            href: "/cart"
        }
    ]
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query) {
            const filteredSuggestions = mockSearchSuggestions.filter(suggestion =>
                suggestion.label.toLowerCase().includes(query.toLowerCase())
            );
            setSearchSuggestions(filteredSuggestions);
        } else {
            setSearchSuggestions([]);
        }
    };

    const SearchBarComponentSnippet = (
        <>
            <div aria-owns="search-bar-content">
                <BaseInput
                    type="text"
                    icon="search"
                    placeholder="Search..."
                    isFullWidth
                    showClearButton
                    value={searchQuery}
                    onChange={handleSearchChange}
                    classInputField={searchClassName}
                />
            </div>
            {searchSuggestions.length > 0 && <div id="search-bar-content" className="bg-white absolute md:shadow-md md:rounded-md z-50 w-full mt-1 h-full md:h-auto">
                <SearchBarResults suggestions={searchSuggestions} query={searchQuery} />
            </div>}
        </>
    )

    return (
        <header className="bg-green-700 text-white">
            <div className="p-4 max-w-7xl mx-auto flex justify-between items-center">
                <button type="button" className="md:hidden">
                    <SvgIcon name="menu" />
                </button>
                <div id="logo" className="font-bold text-xl flex items-center"><SvgIcon name="plant" /> foliage24</div>
                <div className="relative flex-1 mx-12 hidden md:block">
                    {SearchBarComponentSnippet}
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <a href={link.href}>{link.icon}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="md:hidden p-4">
                {SearchBarComponentSnippet}
            </div>
        </header>
    );
}
