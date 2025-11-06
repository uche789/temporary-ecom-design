function AppHeader() {
    const isMobile = useIsMobile();
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchSuggestions, setSearchSuggestions] = React.useState([]);
    const searchClassName = "bg-white text-black rounded-full";
    const navLinks = [
        {
            icon: <SvgIcon name="user" />,
            label: "account",
            description: "My Account",
            href: "/account"
        },
        {
            icon: <SvgIcon name="favourite" />,
            label: "wishlist",
            description: "My Wishlist",
            href: "/wishlist"
        },
        {
            icon: <SvgIcon name="shopping-bag" />,
            label: "cart",
            description: "Cart",
            href: "/cart"
        }
    ]

    const accountLinks = [
        {
            label: 'Profile',
            href: '#customer&profile' // Edited line
        },
        {
            label: 'Orders',
            href: '#customer&orders' // Edited line
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

    React.useEffect(() => {
        if (searchSuggestions.length > 0 && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [searchSuggestions]);

    const onSuggestionClick = (label) => {
        console.log('Suggestion clicked:', label);
        setSearchQuery('');
        setSearchSuggestions([]);
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
            {searchSuggestions.length > 0 && <div id="search-bar-content" className="bg-white absolute md:shadow-md md:rounded-md z-50 w-screen md:w-full left-0 md:left-auto mt-1 h-full md:h-auto">
                <SearchBarResults suggestions={searchSuggestions} query={searchQuery} onSuggestionClick={onSuggestionClick} />
            </div>}
        </>
    )

    const AccountMenuComponent = (
        isMobile ? <MobileAccountMenu menuOptions={accountLinks} open={false} /> : <DesktopAccountMenu menuOptions={accountLinks} customer={mockCustomer} open={false} />
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
                    <div className="flex space-x-4">
                        {navLinks.map(link => (
                            link.label === 'Account' ? (
                                <button 
                                    type="button" 
                                    aria-haspopup="true" 
                                    aria-expanded="false" 
                                    id="account-menu-button" 
                                    key={link.label}
                                >
n                                    <span className="sr-only">{link.description}</span>
                                    <SvgIcon name="account" />
                                    <div>
                                        {AccountMenuComponent}
                                    </div>
                                </button>
                            ) : (
                                <a href={link.href} key={link.label}>
                                    {link.icon}
                                    <span className="sr-only">{link.description}</span>
                                </a>
                            )
                        ))}
                    </div>
                </nav>
            </div>
            <div className="md:hidden p-4">
                {SearchBarComponentSnippet}
            </div>
        </header>
    );
}
