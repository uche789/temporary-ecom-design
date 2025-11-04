function OrdersPage() {
    const modifiedOrders = React.useMemo(() => {
        for (let order of mockOrders) {
            order.productImages = order.items.map(item => item.image);
        }

        return mockOrders.map((order) => {
            const { productImages, ...rest } = order;
            return {
                ...rest,
                productImages: order.items.map(item => item.image),
                orderDate: new Date(order.timestamp).toLocaleDateString(),
            };
        });
    }, []);

    const getStatusTextAndColour = (status) => {
        switch (status.toLowerCase()) {
            case 'processing':
                return { text: 'Processing', color: 'text-yellow-700', bgColor: 'bg-yellow-200' };
            case 'shipped':
                return { text: 'Shipped', color: 'text-blue-700', bgColor: 'bg-blue-200' };
            case 'delivered':
                return { text: 'Delivered', color: 'text-green-800', bgColor: 'bg-green-200' };
            case 'cancelled':
                return { text: 'Cancelled', color: 'text-red-700', bgColor: 'bg-red-200' };
            default:
                return { text: 'Processing', color: 'text-gray-700', bgColor: 'bg-gray-200' };
        }
    };

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
            <p className="mb-6">Here you can view and manage your orders.</p>
            {modifiedOrders.map(order => (
                <article key={order.id} className="relative border border-gray-300 rounded-md p-4 mb-4">
                    <div className={`status-indicator w-4 h-4 absolute rounded-full right-2 ${getStatusTextAndColour(order.status).bgColor}`} aria-hidden="true" />
                    <h2 className="text-xl font-semibold mb-2">Order #{order.orderNumber}</h2>
                    <p className="text-sm text-gray-500">{order.orderDate}</p>
                     <div className="mt-4 flex space-x-4">
                        {order.productImages.map((imgSrc, index) => (
                            <img key={index} src={imgSrc} alt={`Product ${index + 1}`} className="w-16 h-16 object-cover" />
                        ))}
                    </div>
                    <div className="mt-4 flex flex-row space-x-8 md:text-md text-sm">
                        <div className="flex flex-col">
                            <span className="font-semibold">Status</span>
                            <span className={`${getStatusTextAndColour(order.status).color}`}>{getStatusTextAndColour(order.status).text}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">Items</span>
                            <span>{order.items.length}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">Total</span>
                            <span>${order.totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">Discount</span>
                            <span className="text-gray-600">-${order.discountAmount.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="mt-4 space-x-2 flex flex-wrap md:justify-end">
                        <AppButton isPrimary isLink href={`?customer=&order_details=${order.id}`} className="inline-block">View Details</AppButton>
                        {order.canCancel && <AppButton bgColor="bg-red-500" textColor="text-white">Cancel Order</AppButton>}
                        {order.canReturn && <AppButton bgColor="bg-yellow-500" textColor="text-white">Return Order</AppButton>}
                    </div>
                </article>
            ))}
        </>
    );
}
