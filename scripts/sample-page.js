function SamplePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Sample Page</h1>
            <p className="mt-4">Welcome to the sample page. Here you can find a selection of products.</p>
            <BreadCrumb breadCrumb={[{
                label: 'Home',
                href: '/'
            }, {
                label: 'Category',
                href: '/category'
            }, {
                label: 'Current Page',
                href: '/current-page'
            }]} />
            <ProductList products={mockProducts} />
            <hr />
            <ProductTile product={mockProducts[mockProducts.length - 1]} mini={false}/>
        </div>
    );
}
