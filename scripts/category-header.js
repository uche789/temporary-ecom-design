function CategoryHeader({ categories }) {
    const [activeCategory, setActiveCategory] = React.useState(null);

    // max-w-7xl mx-auto
    return (
        <div id="category-header" className="relative pb-4 px-4 font-semibold text-center text-sm">
            <div id="main-categories" className="flex space-x-6 max-w-7xl mx-auto">
                {categories.map((category) => (
                    <a
                        className="block rounded-lg hover:bg-green-800 px-2 py-2"
                        key={category.label}
                        href={category.href}
                        onMouseEnter={() => setActiveCategory(category)}
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        {category.label}
                    </a>
                ))}
            </div>
            {activeCategory && (
                <div id="sub-categories" className="absolute top-12 left-0 w-full bg-green-900 text-white shadow-lg z-40">
                    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 p-4">
                        {activeCategory.children.map((subcategory) => (
                            <a
                                className="block rounded-lg hover:bg-green-800 px-2 py-2"
                                key={subcategory.label}
                                href={subcategory.href}
                            >
                                {subcategory.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}