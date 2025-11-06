function ToastNotificationList() {
    const [notifications, setNotifications] = React.useState([]);

    React.useEffect(() => {
        function handleNewNotification(event) {
            const newNotification = event.detail;
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                newNotification,
            ]);
        }

        window.addEventListener('new-notification', handleNewNotification);

        return () => {
            window.removeEventListener('new-notification', handleNewNotification);
        };
    }, []);

    const handleClose = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        );
    }

    return (
        <div id="toast-notification-list" className="fixed space-y-2 md:top-4 md:right-4 w-full md:right-4 md:w-96 z-50">
            {notifications.map((notification) => (
                <ToastNotification key={notification.id} {...notification} onClose={handleClose} />
            ))}
        </div>
    );
}