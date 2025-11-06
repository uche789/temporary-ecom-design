function MobileAccountMenu({ menuOptions, open, showLogout }) {
    const menu = (
        <div className={`${open ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50`}>
            <nav className="">
                {menuOptions.map(option => (
                    <a key={option.id} href={option.href}>
                        <div className="">{option.label}</div>
                    </a>
                ))}
            </nav>
            {showLogout && (
                <div className="">
                    <button type="button" className="">Logout</button>
                </div>
            )}
        </div>
    );
    return ReactDOM.createPortal(menu, document.body);
}