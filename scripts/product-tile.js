function ProductTile({ product, handleAddToCart }) {
    const [favourite, setFavourite] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(product.images.find(img => img.main) || product.images[0]);


    const handleFavouriteToggle = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setFavourite(!favourite);
    };

    return (
        <div className="p-4 flex flex-wrap justify-center">
            {product.images.length > 1 && 
                <div className="hidden md:flex mr-4 flex-col">
                    {product.images.map((image, index) => {
                        return (
                            <button key={index} onClick={() => setSelectedImage(image)}>
                                <img src={image.url} alt={product.title} className="w-28 h-28 object-cover mb-2 rounded-xl" />
                            </button>
                        );
                    })}
                </div>
            }
            <figure className="relative md:mb-0 mb-6">
                <ProductChip label="Sale" className="absolute top-2 left-2" />
                <img src={selectedImage.url} alt={product.title} className="max-w-full w-120 h-120 object-cover mb-2 rounded-xl" />
                <figcaption dangerouslySetInnerHTML={{ __html: selectedImage.imageCaption }} className="text-xs text-center" />
            </figure>
            <div className="mt-2 flex-auto flex flex-col md:ml-8 max-w-100">
                <span className="text-3xl font-bold mb-2">{product.title}</span>
                <p>{product.description}</p>
                <p className="mt-4 text-lg font-semibold">{product.price.toFixed(2)} €</p>
                <div className="mt-4 flex items-center">
                    <AppButton isPrimary onClick={() => handleAddToCart(product, quantity)} className="w-full">
                        Add to Cart
                    </AppButton>
                    <button onClick={handleFavouriteToggle} className={`ml-2 bottom-2 flex items-center right-2 z-10 bg-gray-300 rounded-full p-1 ${favourite ? 'text-white bg-green-900' : ''}`}>
                        <SvgIcon name="favourite" width={30} height={30} />
                    </button>
                </div>
                <ul className="mt-4 w-full border border-gray-300">
                    <li className="p-2 border-b border-b-gray-300">2-4 Days Standard Delivery</li>
                    <li className="p-2 border-b border-b-gray-300">Free Shipping and Returns</li>
                    <li className="p-2">30-Day Return Policy</li>
                </ul>
            </div>
        </div>
    );
}
