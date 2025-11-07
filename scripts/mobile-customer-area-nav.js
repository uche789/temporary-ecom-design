function MobileCustomerAreaNav() {
    const accountLinks = [
        {
            label: 'Profile',
            href: '?customer&profile' // Edited line
        },
        {
            label: 'Orders',
            href: '?customer&orders' // Edited line
        }
    ]
    
    return (
        <nav className="flex space-x-4 overflow-x-auto border-b border-gray-300 mb-6 pb-4 justify-center">
            {accountLinks.map(link => (
                <a key={link.label} href={link.href} className="block !no-underline px-4 py-2 hover:bg-gray-100 border border-gray-500 rounded-md">
                    {link.label}
                </a>
            ))}
        </nav>
    )
}