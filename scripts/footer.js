import { Children } from "react";

function AppFooter() {
    const legalLinksList = [
        {
            label: 'Legal Notice',
            url: '/legal'
        },
        {
            label: 'Privacy Policy',
            url: '/privacy'
        },
        {
            label: 'Terms & Conditions',
            url: '/terms'
        }
    ]

    const companyLinks = [
        {
            label: 'About Us',
            url: null,
            children: [
                {
                    label: 'Our Story',
                    url: '/about#our-story'
                },
                {
                    label: 'Team',
                    url: '/about#team'
                },
                {
                    label: 'Careers',
                    url: '/careers'
                },
                {
                    label: 'Join the Team',
                    url: '/careers#join'
                },
                {
                    label: 'Internships',
                    url: '/careers#internships'
                }
            ]
        },
        {
            label: 'Help',
            url: null,
            children: [
                {
                    label: 'Shipping',
                    url: '/help#shipping'
                },
                {
                    label: 'Delivery & Returns',
                    url: '/help#delivery-returns'
                },
                {
                    label: 'FAQ',
                    url: '/help#faq'
                },
                {
                    label: 'Contact',
                    url: '/contact'
                },
            ]
        }
    ]

    return (
        <footer className="text-white">
            <div className="px-4 py-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {companyLinks.map(({ label, url, children }) => (
                        <div key={label} className="flex flex-col">
                            <span className="font-bold uppercase">{label}</span>
                            {children ? (
                                children.map(({ label, url }) => (
                                    <a key={label} href={url} className="py-1">
                                        {label}
                                    </a>
                                ))
                            ) : (
                                <a href={url} className="py-1">
                                    {label}
                                </a>
                            )}
                        </div>
                    ))}
                    <div className="follow-us">
                        <span className="font-bold uppercase"># Follow us</span>
                        <div className="flex flex-row pt-1">
                            <a href="#" className="pr-2"><SvgIcon name="instagram" /></a>
                            <a href="#" className="pr-2"><SvgIcon name="youtube" /></a>
                        </div>
                    </div>
                </div>
                <div className="border border-white my-6"></div>
                <div className="text-sm font-thin flex flex-wrap justify-between">
                    <div className="flex items-center">© 2025 foliage24</div>
                    <nav>
                        <ul className="flex space-x-4">
                            {legalLinksList.map(({ label, url }) => (
                                <li key={label}>
                                    <a href={url}>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
