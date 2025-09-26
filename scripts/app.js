function App() {
    const isCheckout = window.location.search.includes('checkout') ? true : false;

    return (
        <>
            {isCheckout && <CheckoutHeader />}
            {!isCheckout && <><Notice /><AppHeader /></>}
            <MainContent />
            {!isCheckout && <Newsletter />}
            <AppFooter />
        </>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

