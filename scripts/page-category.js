function PageCategory() {
    return (
        <>
            <Notice />
            <AppHeader />
            <MainContent />
            <AppFooter />
        </>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<PageCategory />);

