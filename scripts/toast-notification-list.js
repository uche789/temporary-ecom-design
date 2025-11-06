function ToastNotificationList() {
    const [notifications, setNotifications] = React.useState([]);
    const [queue, setQueue] = React.useState([]);

    const createAndSetNotification = (notification) => {
        const id = Date.now() + Math.random().toString(36).substring(2, 9);
        const newNotification = { ...notification, id };
        setNotifications((prevNotifications) => [
            newNotification,
            ...prevNotifications,
        ]);
    }

    React.useEffect(() => {
        if (notifications.length < 5 && queue.length > 0) {
            setQueue((prevQueue) => {
                const [nextNotification, ...restQueue] = prevQueue;
                
                if (nextNotification) {
                    createAndSetNotification(nextNotification);
                }
                return restQueue;
            });
        }
    }, [notifications, queue]);

    React.useEffect(() => {
        function handleNewNotification(event) {
            setQueue((prevQueue) => [...prevQueue, event.detail]);
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
        <div id="toast-notification-list" className="fixed md:space-y-2 bottom-0 left-0 right-0 md:bottom-auto md:top-4 md:right-4 md:left-auto w-full md:right-4 md:w-96 z-50">
            {notifications.map((notification) => (
                <ToastNotification key={notification.id} {...notification} onClose={handleClose} />
            ))}
        </div>
    );
}