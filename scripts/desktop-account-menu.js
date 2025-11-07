function DesktopAccountMenu({ menuOptions, customer = null, open }) {
    const customerName = React.useMemo(() => `${customer?.firstName} ${customer?.lastName}`, [customer]);
    return (
        <div
            id="dropdown-account-menu"
            className={`${open ? 'block' : 'hidden'} border border-gray-300 text-black md:block absolute top-full right-0 mt-2 w-48 bg-white shadow-lg z-50`}
            aria-labelledby="account-menu-button"
        >
            <div className="font-bold border-b p-4 border-gray-300 space-x-2">
                <span className="">Hi {customer ? customerName : 'Guest'}!</span>
                {customer && <button type="button" className="underline text-gray-600 hover:no-underline">Sign out</button>}
                {!customer && <a href="/login" className="underline text-gray-600 hover:no-underline">Sign in</a>}
            </div>
            {menuOptions.map(option => (
                <a key={option.label} href={option.href} className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200">{option.label}</a>
            ))}
        </div>
    );
}