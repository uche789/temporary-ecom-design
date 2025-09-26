function BreadCrumb({ breadCrumb = [] }) {
    return (
        <nav className="py-4 text-xs">
            <div className="max-w-7xl mx-auto">
                <ol className="list-reset flex">
                    {breadCrumb.map((item, index) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-green-700 hover:text-green-500">
                                {item.label}
                            </a>
                            {index < breadCrumb.length - 1 && <span className="mx-2">/</span>}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
}
