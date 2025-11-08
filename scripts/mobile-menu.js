function MobileMenu({ open = false, customer, logout = () => {}, onClose = () => {} }) {
    const customerName = React.useMemo(() => `${customer?.firstName} ${customer?.lastName}`, [customer]);
    const [shouldRender, setShouldRender] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const linkClass = "block rounded-lg hover:bg-green-800 hover:text-white px-2 py-2";

    React.useEffect(() => {
        if (open) {
            // Start rendering the menu
            setShouldRender(true);
            // Give a tiny delay to ensure the menu is rendered, then start animation
            const animateTimer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(animateTimer);
        } else {
            // Start closing animation immediately
            setIsAnimating(false);
            // Remove from DOM after animation completes
            const hideTimer = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(hideTimer);
        }
    }, [open]);

    // Don't render anything if not needed
    if (!shouldRender) {
        return null;
    }

    const menu = (
        <>
            {open && <div className="fixed inset-0 w-screen h-screen bg-black opacity-40 z-40" />}
            <div 
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 text-black ${
                    isAnimating ? 'translate-x-0' : '-translate-x-full'
                }`}
                style={{ 
                    transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)',
                    visibility: shouldRender ? 'visible' : 'hidden'
                }}
            >
                <div className="flex font-bold border-b p-4 border-gray-300 space-x-2">
                    <span className="">Hi {customer ? customerName : 'Guest'}!</span>
                    {customer &&
                        <button
                            type="button"
                            className="underline text-gray-600 hover:text-gray-800 ml-2"
                            onClick={logout}
                        >
                            Sign out
                        </button>
                    }
                    {!customer && <a href="/login" className="underline text-gray-600 hover:no-underline">Sign in</a>}
                    <button type="button" onClick={onClose} className="left-auto ml-auto">
                        <SvgIcon name="close" />
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4 overflow-y-auto h-full">
                    <div id="account-links">
                        {customer && accountLinks.map(option => (
                            <a key={option.label} href={option.href} className={`${linkClass} flex items-center`}>
                                <span className="mr-1"><SvgIcon name={option.icon} aria-hidden="true" /></span>
                                {option.label}
                            </a>
                        ))}
                    </div>
                    <div className={`${customer ? 'border-t border-gray-300 pt-4' : ''}`}>
                        {categories.map(category => (
                            <div key={category.key}>
                                <a
                                    key={category.label}
                                    className={`${linkClass} font-semibold`}
                                >
                                    {category.label}
                                </a>
                                {category.children && (
                                    <div className="pl-4 mt-2">
                                        {category.children.map(subcategory => (
                                            <a
                                                key={subcategory.key}
                                                className={linkClass}
                                                href={subcategory.href}
                                            >
                                                {subcategory.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
    return ReactDOM.createPortal(menu, document.body);
}