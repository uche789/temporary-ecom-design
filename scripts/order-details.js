function OrderDetails() {
  const [searchParams] = React.useState(new URLSearchParams(window.location.search));
  const orderId = searchParams.get('order_details');
  const [order, setOrder] = React.useState(null);
  const orderDate = React.useMemo(() => {
    if (!order) return null;
    return (new Date(order.timestamp)).toLocaleDateString();
  }, [order]);

  const classItemdl = "grid grid-cols-2 gap-x-4";
  const classSection = "bg-gray-50 p-4 rounded mb-6 min-w-32";

  const divider = <div className="border-t border-gray-300 my-4" />;

  const OrderAddress = ({address}) => (
    <div className="mb-4">
      <p><strong>Name:</strong> {address.name}</p>
      <p><strong>Address:</strong> {address.address}</p>
      <p><strong>City:</strong> {address.city}</p>
      <p><strong>Postal Code:</strong> {address.postalCode}</p>
      <p><strong>Country:</strong> {address.country}</p>
    </div>
  );

  React.useEffect(() => {
    const foundOrder = mockOrders.find(o => o.id === Number(orderId));
    setOrder(foundOrder || null);
  }, [orderId]);

  const getDiscountText = (discountType) => {
    switch (discountType) {
      case 'sale':
        return 'Sale Discount';
      case 'voucher':
        return 'Voucher Discount';
      default:
        return '';
    }
  };

  return <>
    <h1 className="text-3xl font-bold mb-6">Order Details</h1>
    <p>Here you can view and manage your order details.</p>
    {order ? (
      <>
        <h2 className="text-xl font-semibold mt-4 mb-2">Order Number: <span aria-hidden="true">#</span>{order.orderNumber}</h2>
        <p className="mb-4">Order date: {orderDate}</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <section className={`${classSection} row-span-2`}>
            <h3 className="text-lg font-semibold mb-2">Items</h3>
            {divider}
            {order.items.map(item => (
              <article key={item.id} className="bg-gray-100 p-4 my-4 rounded">
                <h4 className="font-semibold">{item.title}</h4>
                <div className="flex gap-5">
                  <figure className="my-2">
                    <img src={item.image} alt={item.title} className="w-50 h-auto rounded" />
                  </figure>
                  <div className="flex flex-col gap-1 mt-4">
                    <dl className={classItemdl}>
                      <dt>Quantity:</dt>
                      <dd>{item.quantity}</dd>
                    </dl>
                    <dl className={classItemdl}>
                      <dt>Price:</dt>
                      <dd>${item.originalPrice.toFixed(2)}</dd>
                    </dl>
                    {item.discounts?.length > 0 && <>
                      {item.discounts.map((disc, index) => (
                        <dl className={`${classItemdl} text-green-700`} key={index}>
                          <dt>{getDiscountText(disc.type)}:</dt>
                          <dd>
                            {disc.amountType === 'percentage'
                              ? `-${disc.amount.toFixed(0)}%`
                              : `-€${disc.amount.toFixed(2)}`
                            }
                          </dd>
                        </dl>
                      ))}
                    </>}
                    <dl className={`${classItemdl}`}>
                      <dt>Subtotal:</dt>
                      <dd>€{(item.originalPrice * item.quantity).toFixed(2)}</dd>
                    </dl>
                    {divider}
                    <dl className={`${classItemdl} font-semibold`}>
                      <dt>Total:</dt>
                      <dd>
                        €{(item.originalPrice * item.quantity - item.discounts.reduce((acc, disc) => {
                          if (disc.amountType === 'percentage') {
                            return acc + (item.originalPrice * item.quantity) * (disc.amount / 100);
                          } else {
                            return acc + disc.amount;
                          }
                        }, 0)).toFixed(2)}
                      </dd>
                    </dl>
                  </div>
                </div>

              </article>
            ))}
          </section>
          <section className={classSection}>
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            {divider}
            <dl className={classItemdl}>
              <dt>Status:</dt>
              <dd>{order.status}</dd>
            </dl>
            <dl className={classItemdl}>
              <dt>Estimated Delivery:</dt>
              <dd>{order.tracking?.estimatedDelivery || '3-5 business days'}</dd>
            </dl>
            <div className="border-t border-gray-300 my-4" />
            <dl className={classItemdl}>
              <dt>Discounts:</dt>
              <dd className="text-green-700">-${order.discountAmount.toFixed(2)}</dd>
            </dl>
            <dl className={classItemdl}>
              <dt>Subtotal:</dt>
              <dd>${(order.totalAmount + order.discountAmount).toFixed(2)}</dd>
            </dl>
            <dl className={classItemdl}>
              <dt>Shipping Cost:</dt>
              <dd>${order.shippingCost.toFixed(2)}</dd>
            </dl>
            {divider}
            <dl className={`${classItemdl} text-lg font-semibold`}>
              <dt>Total Amount:</dt>
              <dd>${(order.totalAmount + order.shippingCost).toFixed(2)}</dd>
            </dl>
            <span className="text-sm text-gray-500">Includes all taxes and fees</span>
          </section>
          <section className={classSection}>
            <h3 className="text-lg font-semibold mb-2">Tracking Information</h3>
            {divider}
            {order.tracking ? (
              <>
                {order.tracking.carrier && <p>Carrier: {order.tracking.carrier}</p>}
                {order.tracking.trackingNumber && <p>Tracking Number: {order.tracking.trackingNumber}</p>}
                {order.tracking.estimatedDelivery && <p>Estimated Delivery: {order.tracking.estimatedDelivery}</p>}
                {order.tracking.status && <p>Status: {order.tracking.status}</p>}
                {divider}
                {order.tracking.history && order.tracking.history.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Tracking History:</h4>
                    <ul className="list-disc list-inside">
                      {order.tracking.history.map((event, index) => (
                        <li key={index}>
                          <span className="font-semibold">{(new Date(event.timestamp)).toLocaleDateString()}:</span> {event.status} - {event.location}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4">
                  {order.tracking.trackingLink && <AppButton isLink href={order.tracking.trackingLink} className="inline-block">Track your order</AppButton>}
                </div>
              </>
            ) : (
              <p>No tracking information available.</p>
            )}
          </section>
          <section className={classSection}>
            <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
            {divider}
            <OrderAddress address={order.billingAddress} />
          </section>
          <section className={classSection}>
            <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
            {divider}
            <OrderAddress address={order.shippingAddress} />
          </section>
        </div>
      </>
    ) : (
      <p>Order not found.</p>
    )}
  </>;
}
