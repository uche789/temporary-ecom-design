function DesktopAccountMenu({ menuOptions, customer, open }) {
    return (
        <div 
            id="dropdown-account-menu" 
            className={`${open ? 'block' : 'hidden'} md:block absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50`}
            aria-labelledby="account-menu-button"
        >
            <div className="font-bold">
                <span className="">Hi {customer ? customer.name : 'Guest'}!</span>
                <button type="button" className="underline text-gray-600 hover:text-gray-800">Logout</button>
            </div>
            <ul>
                {menuOptions.map(option => (
                    <li key={option.label}>
                        <a href={option.href}>{option.label}</a>
                    </li>
                ))}
            </ul>
            {showLogout && (
                <div className="border">
                    <button type="button" className="">Logout</button>
                </div>
            )}
        </div>
    );
}