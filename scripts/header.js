function AppHeader() {
    const [searchQuery, setSearchQuery] = React.useState("");
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
        setSearchQuery(event.target.value);
    };
    return (
        <header className="bg-green-700 text-white">
            <div className="p-4 max-w-7xl mx-auto flex justify-between items-center">
                <button type="button" className="md:hidden">
                    <SvgIcon name="menu" />
                </button>
                <div id="logo" className="font-bold text-xl flex items-center"><SvgIcon name="plant" /> foliage24</div>
                <div className="flex-1 mx-12 hidden md:block">
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
        </header>
    );
}
