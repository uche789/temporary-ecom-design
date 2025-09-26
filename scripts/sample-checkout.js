function SampleCheckout() {
    const address = window.location.search.includes('address');
    const payment = window.location.search.includes('payment');
    const summary = window.location.search.includes('summary');

    let currentPage = <RegisterLogin />;

    if (address) {
        currentPage = <AddressPage />;
    } else if (payment) {
        currentPage = <PaymentPage />;
    } else if (summary) {
        currentPage = <OrderSummaryPage />;
    }

    return (
        <>
            {currentPage}
        </>
    );
}
