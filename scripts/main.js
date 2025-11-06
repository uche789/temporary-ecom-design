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

    const [showModal, setShowModal] = React.useState(false);

    return (
        <main className="px-4 py-8 bg-white min-h-96">
            <div className="max-w-7xl mx-auto">
                {/* router comes here -- */}
                <div className="space-y-4">
                    <ToastNotificationList />
                </div>


                {/* Delete everything below this */}
                {displayPage}
                <div className="mt-4">
                    <AppButton onClick={() => setShowModal(true)}>Open Modal</AppButton>
                    {showModal && (
                        <ModalWindow
                            onClose={() => setShowModal(false)}
                            header="Modal Header"
                            main={mockModalContent}
                            footer="This is the modal footer"
                        />
                    )}
                </div>
                <SampleNotifications />
            </div>
        </main>
    );
}
