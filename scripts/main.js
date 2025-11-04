function MainContent() {
    const isCheckout = window.location.search.includes('checkout') ? true : false;
    const isCustomerArea = window.location.search.includes('customer') ? true : false;
    let displayPage = null;

    if (isCustomerArea) {
        displayPage = <CustomerAreaPage />;
    } else if (isCheckout) {
        displayPage = <SampleCheckout />;
    } else {
        displayPage = (
            <>
                <SamplePage />
                <Cart mini={false} />
            </>
        );
    }

    return (
        <main className="px-4 py-8 bg-white min-h-96">
            <div className="max-w-7xl mx-auto">
                {/* router comes here -- */}
                {displayPage}
            </div>
        </main>
    );
}
