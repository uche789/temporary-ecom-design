function SampleCheckout() {
    const address = window.location.search.includes('address');
    const payment = window.location.search.includes('payment');
    const summary = window.location.search.includes('summary');

    let currentPage = {
        title: 'Register / Login',
        element: <RegisterLogin />,
        currentStep: 0
    };

    if (address) {
        currentPage = {
            title: 'Address',
            element: <AddressPage />,
            currentStep: 1
        };
    } else if (payment) {
        currentPage = {
            title: 'Payment',
            element: <PaymentPage />,
            currentStep: 2
        };
    } else if (summary) {
        currentPage = {
            title: 'Order Summary',
            element: <OrderSummaryPage />,
            currentStep: 3
        };
    }

    return (
        <>
            {currentPage.currentStep > 0 && <CheckoutProgress currentStep={currentPage.currentStep} />}
            <h1 className="text-3xl font-bold mb-6">{currentPage.title}</h1>
            
            {currentPage.currentStep === 0 && currentPage.element}
            {currentPage.currentStep > 0  && <>
                <div id="main-checkout-content" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentPage.element}
                    <Cart mini={true} confirmOrder={currentPage.currentStep === 3} />
                </div>
            </>}
        </>
    );
}
