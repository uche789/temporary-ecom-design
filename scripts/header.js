function AppHeader() {
    const isMobile = useIsMobile();
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchSuggestions, setSearchSuggestions] = React.useState([]);
    const searchClassName = "bg-white text-black rounded-full";
    const searchBarResultsRef = React.useRef(null);
    const [accountMenuOpen, setAccountMenuOpen] = React.useState(false);
    const accountMenuButtonRef = React.useRef(null);
    const accountMenuRef = React.useRef(null);
    const [customer] = React.useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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

    React.useEffect((prev, curr) => {
        if (prev !== curr) {
            setAccountMenuOpen(false);
        }
    }, [isMobile]);

    React.useEffect(() => {
        if (searchSuggestions.length > 0 && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [searchSuggestions]);

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (isMobile) return;
            if (
                searchBarResultsRef.current &&
                !searchBarResultsRef.current.contains(event.target)
            ) {
                setSearchSuggestions([]);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const onSuggestionClick = (label) => {
        console.log('Suggestion clicked:', label);
        setSearchQuery('');
        setSearchSuggestions([]);
    };

    const SearchBarComponentSnippet = (refTouse = null) => (
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
            {searchSuggestions.length > 0 &&
                <div
                    id="search-bar-content"
                    className="bg-white absolute md:shadow-md md:rounded-md z-50 w-screen md:w-full left-0 md:left-auto mt-1 h-full md:h-auto"
                    ref={refTouse}
                >
                    <SearchBarResults
                        suggestions={searchSuggestions}
                        query={searchQuery}
                        onSuggestionClick={onSuggestionClick}
                    />
                </div>}
        </>
    )

    // Close menu on outside click or Escape
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (
                accountMenuOpen &&
                accountMenuRef.current &&
                !accountMenuRef.current.contains(event.target) &&
                !accountMenuButtonRef.current.contains(event.target)
            ) {
                setAccountMenuOpen(false);
            }
        }
        function handleEscape(event) {
            if (event.key === "Escape") {
                setAccountMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [accountMenuOpen]);

    return (
        <header className="bg-green-700 text-white">
            <div className="p-4 max-w-7xl mx-auto flex justify-between items-center">
                <button 
                    type="button"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <SvgIcon name="menu" />
                </button>
                <div id="logo" className="font-bold text-xl flex items-center"><SvgIcon name="plant" /> foliage24</div>
                {/* Search Bar for desktop */}
                <div className="relative flex-1 mx-12 hidden md:block">
                    {SearchBarComponentSnippet(searchBarResultsRef)}
                </div>
                {/* End: Search Bar for desktop */}
                <nav>
                    <div className="flex space-x-4">
                        {navLinks.map(link => (
                            link.label === 'account' && !isMobile ? (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => setAccountMenuOpen(true)}
                                    onMouseLeave={() => setAccountMenuOpen(false)}
                                >
                                    <button
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded={accountMenuOpen}
                                        aria-controls="account-menu"
                                        id="account-menu-button"
                                        ref={accountMenuButtonRef}
                                        onFocus={() => setAccountMenuOpen(true)}
                                        onBlur={e => {
                                            // Only close if focus moves outside the menu and button
                                            if (
                                                accountMenuRef.current &&
                                                !accountMenuRef.current.contains(e.relatedTarget)
                                            ) {
                                                setAccountMenuOpen(false);
                                            }
                                        }}
                                        className="flex items-center"
                                    >
                                        <span className="sr-only">{link.description}</span>
                                        <SvgIcon name={link.icon} />
                                    </button>
                                    {accountMenuOpen && (
                                        <div
                                            id="account-menu"
                                            ref={accountMenuRef}
                                            tabIndex={-1}
                                            className="absolute left-30 -mt-2 z-50"
                                            onFocus={() => setAccountMenuOpen(true)}
                                            onBlur={e => {
                                                // Only close if focus moves outside the menu and button
                                                if (
                                                    accountMenuButtonRef.current &&
                                                    !accountMenuButtonRef.current.contains(e.relatedTarget)
                                                ) {
                                                    setAccountMenuOpen(false);
                                                }
                                            }}
                                        >
                                            <DesktopAccountMenu menuOptions={accountLinks} customer={customer} open={false} />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /** Other nav links */
                                <a href={link.href} key={link.label}>
                                    <SvgIcon name={link.icon} />
                                    <span className="sr-only">{link.description}</span>
                                </a>
                            )
                        ))}
                    </div>
                </nav>
            </div>
            {!isMobile && <CategoryHeader categories={categories} />}
            {/* Search Bar for mobile */}
            <div className="md:hidden p-4">
                {SearchBarComponentSnippet(null)}
            </div>
            {/* End: Search Bar for mobile */}

            {isMobile && (
                <MobileMenu
                    menuOptions={accountLinks}
                    open={mobileMenuOpen}
                    customer={customer}
                    onClose={() => setMobileMenuOpen(false)}
                    logout={() => {
                        console.log('Logout clicked');
                        setMobileMenuOpen(false);
                    }}
                />
            )}
        </header>
    );
}
