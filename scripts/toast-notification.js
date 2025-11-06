function ToastNotification({ id, type = 'info', message = '', duration = 3000, closeable, onClose }) {
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose(id);
        }, duration);

        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    const closeWithButton = () => {
        setIsVisible(false);
        onClose(id);
    };

    if (!isVisible) return null;

    const typeClasses = {
        info: 'bg-blue-100 border-blue-500 text-blue-700',
        success: 'bg-green-100 border-green-500 text-green-700',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
        error: 'bg-red-100 border-red-500 text-red-700',
    };

    return (
        <div
            className={`relative p-4 border-l-4 md:rounded shadow-md transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} ${typeClasses[type] || typeClasses.info}`}
        >
            {closeable && (
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={closeWithButton}
                >
                    <span className="sr-only">Close</span>
                    <span className="text-lg" aria-hidden="true">&times;</span>
                </button>
            )}
            <p>{message}</p>
        </div>
    );
}