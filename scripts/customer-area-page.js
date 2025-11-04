function CustomerAreaPage() {
    const orders = window.location.search.includes('orders');
    const orderDetails = window.location.search.includes('order_details');
    let displayPage = <ProfilePage />;
    
    if (orders) {
        displayPage = <OrdersPage />;
    } else if (orderDetails) {
        displayPage = <OrderDetails />;
    }

    return <>
        {displayPage}
    </>;
}