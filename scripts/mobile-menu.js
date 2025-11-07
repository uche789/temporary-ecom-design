function MobileAccountMenu({ menuOptions, open, customer, logout = () => {}}) {
    const customerName = React.useMemo(() => `${customer?.firstName} ${customer?.lastName}`, [customer]);
    const menu = (
        <>
            {open && <div className="fixed inset-0 w-screen h-screen bg-black opacity-40" />}
            <div className={`${open ? 'translate-x-0' : '-translate-x-full'} text-black fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50`}>
                <div className="font-bold border-b p-4 border-gray-300 space-x-2">
                    <span className="">Hi {customerName || 'Guest'}!</span>
                    {customer &&
                        <button
                            type="button"
                            className="underline text-gray-600 hover:text-gray-800 ml-2"
                            onClick={logout}
                        >
                            Sign out
                        </button>
                    }
                </div>
                <nav className="">
                    {menuOptions.map(option => (
                        <a key={option.label} href={option.href}>
                            <div className="">{option.label}</div>
                        </a>
                    ))}
                </nav>
                {!!customer && (
                    <div className="">
                        <button type="button" className="">Logout</button>
                    </div>
                )}
            </div>
        </>
    );
    return ReactDOM.createPortal(menu, document.body);
}