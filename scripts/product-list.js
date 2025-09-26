function ProductList({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <a key={product.id} href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                    <ProductTileMini product={product} />
                </a>
            ))}
        </div>
    );
}
