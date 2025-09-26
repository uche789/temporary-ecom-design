function Card({ children, className }) {
    return (
        <div className={`rounded-2xl p-4 shadow-md border border-gray-200 ${className}`}>
            {children}
        </div>
    );
}
