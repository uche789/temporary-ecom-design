function Cart({ mini = false }) {
    const [cart, setCart] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate fetching cart items
        setCart(mockCart);
        setLoading(false);
    }, []);

    const formatPrice = (price) => {
        return price.toFixed(2) + ' €';
    }

    const itemPrice = (item) => {
        if (item.price.original === item.price.current) {
            return <span className="text-gray-600 font-semibold">{formatPrice(item.price.current)}</span>;
        }
        return <>
            <span className="text-gray-600 line-through">Original Price: {formatPrice(item.price.original)}</span>
            <span className="text-red-600 font-semibold">Price: {formatPrice(item.price.current)}</span>
        </>;
    }

    if (mini) {
        return (
            <aside className="hidden md:block md:col-span-1">
                {loading ? (
                    <div className="flex items-center p-6 bg-gray-100 rounded-md justify-center w-full h-full">
                        <span className="text-gray-500">Loading...</span>
                    </div>
                ) : (
                    <div className="p-6 bg-gray-100 rounded-md">
                        <ul>
                            {cart?.items?.map((item) => (
                                <li key={item.id} className="flex items-center mb-4 border-b border-gray-300 pb-4">
                                    <a href={item.productLink} className="flex items-center">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                                    </a>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold">{item.title}</span>
                                        {itemPrice(item)}
                                        <span className="text-gray-600">Quantity: {item.quantity}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {cart.voucher && mini && <div className="flex justify-between border-b border-gray-300 pb-4 mb-4">
                            Voucher applied: <span className="font-semibold">{cart.voucher.code}</span>
                        </div>}
                        
                        <dl className="space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-lg font-semibold">Subtotal:</dt>
                                <dd className="text-lg">{formatPrice(cart.subTotal)}</dd>
                            </div>
                            {cart.discount && (
                                <div className="flex justify-between text-green-600">
                                    <dt className="text-lg font-semibold">Discount:</dt>
                                    <dd className="text-lg">-{formatPrice(cart.discount)}</dd>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <dt className="text-lg font-semibold">Shipping:</dt>
                                <dd className="text-lg">{formatPrice(cart.shippingCost)}</dd>
                            </div>
                            <div className="flex justify-between border-t border-gray-300 pt-4 mt-4">
                                <dt className="text-2xl font-semibold">Total:</dt>
                                <dd className="text-2xl">{formatPrice(cart.grandTotal + cart.shippingCost)}</dd>
                            </div>
                            <p className="text-gray-600 text-sm">Includes all taxes and fees</p>
                        </dl>
                    </div>
                )}
            </aside>
        );
    }

    if (!cart || cart.items.length === 0) {
        return (
            <div className="cart-empty text-center py-8">
                <h1 className="text-2xl mb-6 font-semibold">Your cart is empty</h1>
                <p className="text-gray-600">Add some products to your cart to get started.</p>
            </div>
        );
    }

    return (
        <>
            <div className="cart max-w-4xl mx-auto">
                <h1 className="text-2xl mb-6 font-bold">Your Shopping Cart</h1>
                {loading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <span className="text-gray-500">Loading...</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                        <div className="col-span-2">
                            <ul>
                                {cart?.items?.map((item) => (
                                    <li key={item.id} className="relative flex my-4 border border-gray-300 rounded-md p-6">
                                        <button className="absolute right-4 top-4 text-gray-500 hover:text-red-500 cursor-pointer">
                                            <SvgIcon name="close" />
                                        </button>
                                        <a href={item.productLink}>
                                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                                        </a>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-semibold">{item.title}</span>
                                            {itemPrice(item)}
                                            <div className="text-gray-600">
                                                Quantity: <BaseInput
                                                    type="number"
                                                    name={`quantity_${item.id}`}
                                                    value={item.quantity}
                                                    min="1"
                                                    max={item.stock}
                                                    className="w-24"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="py-2">
                                <h2 className="text-xl mb-4 font-bold">Discount or Voucher Code</h2>
                                <form className="mt-6 mb-4 flex flex-wrap">
                                    <BaseInput
                                        type="text"
                                        label="Voucher Code"
                                        hideLabel
                                        placeholder="Enter discount code"
                                        className="bg-white w-full md:w-auto"
                                    />
                                    <AppButton isSubmit className="mt-2 w-full md:mt-0 md:ml-2 md:w-auto">
                                        Apply Voucher
                                    </AppButton>
                                </form>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold">CODE2005</span>
                                    <button className="text-gray-500 hover:text-red-500 cursor-pointer"><SvgIcon name="close" /></button>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">
                                    This voucher gives you a 20% discount on your order.
                                </p>
                            </div>
                        </div>
                        <aside className="mt-4 md:mt-0 md:p-6 rounded-md">
                            <dl className="space-y-2">
                                <div className="flex justify-between">
                                    <dt className="text-lg font-semibold">Subtotal:</dt>
                                    <dd className="text-lg">{formatPrice(cart.subTotal)}</dd>
                                </div>
                                {cart.discount && (
                                    <div className="flex justify-between text-green-600">
                                        <dt className="text-lg font-semibold">Discount:</dt>
                                        <dd className="text-lg">- {formatPrice(cart.discount)}</dd>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <dt className="text-lg font-semibold">Shipping:</dt>
                                    <dd className="text-lg">{formatPrice(cart.shippingCost)}</dd>
                                </div>
                                <div className="flex justify-between border-t border-gray-300 pt-4 mt-4">
                                    <dt className="text-2xl font-semibold">Total:</dt>
                                    <dd className="text-2xl">{formatPrice(cart.grandTotal + cart.shippingCost)}</dd>
                                </div>
                            </dl>
                            <AppButton isPrimary className="mt-4 w-full">
                                Proceed to Checkout
                            </AppButton>
                        </aside>
                    </div>
                )}
            </div>
        </>
    );
}
