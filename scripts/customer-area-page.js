function CustomerAreaPage() {
    const orders = window.location.search.includes('orders');
    const orderDetails = window.location.search.includes('order_details');
    const guestOrder = window.location.search.includes('guest_order');
    let displayPage = <ProfilePage />;
    
    if (orders) {
        displayPage = <OrdersPage />;
    } else if (orderDetails) {
        displayPage = <OrderDetails />;
    } else if (guestOrder) {
        displayPage = <GuestOrderPage />;
    }

    return <>
        {displayPage}
    </>;
}