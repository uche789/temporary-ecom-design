function ProductTileMini({ product }) {
    const [favourite, setFavourite] = React.useState(false);

    const image = product.images.find(img => img.main) || {};

    const handleFavouriteToggle = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setFavourite(!favourite);
    };

    return (
        <div className="p-4">
            <div className="relative">
                <ProductChip label="Sale" className="absolute top-2 left-2" />
                <img src={image.url} alt={product.title} className="w-96 h-96 object-cover mb-2 rounded-xl" />
                <button onClick={handleFavouriteToggle} className={`absolute bottom-2 flex items-center right-2 z-10 bg-gray-300 rounded-full p-1 ${favourite ? 'text-white bg-green-900' : ''}`}>
                    <SvgIcon name="favourite" width={30} height={30} />
                </button>
            </div>
            <div className="mt-2">
                <span className="text-xl font-bold mb-2">{product.title}</span>
                <p className="text-lg font-semibold">{product.price.toFixed(2)} €</p>
            </div>
        </div>
    );
}
