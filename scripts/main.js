function MainContent() {
    const isCheckout = window.location.search.includes('checkout') ? true : false;
    
    return (
        <main className="px-4 py-8 bg-white min-h-96">
            <div className="max-w-7xl mx-auto">
                {/* router comes here -- */}
                { !isCheckout 
                    ? 
                    <>
                        <SamplePage />
                        <Cart mini={false} />
                    </>
                    : <SampleCheckout />
                }
            </div>
        </main>
    );
}
