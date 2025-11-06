function AlertNotification({ type = 'info', message = '', closeable, onClose = () => {} }) {

    const typeClasses = {
        info: 'bg-blue-100 border-blue-500 text-blue-700',
        success: 'bg-green-100 border-green-500 text-green-700',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
        error: 'bg-red-100 border-red-500 text-red-700',
    };

    return (
        <div className={`fixed bottom-4 right-4 p-4 border-l-4 rounded shadow-md ${typeClasses[type] || typeClasses.info}`}>
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
