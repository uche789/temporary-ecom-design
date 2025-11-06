import { use } from "react";

function SampleNotifications() {
    const { addNotification } = useToastNotification();

    const types = ['info', 'success', 'warning', 'error'];
    const closable = [true, false];

    const triggerNotification = () => {
        addNotification({
            id: Date.now() + Math.random().toString(36).substring(2, 9),
            type: types[Math.floor(Math.random() * types.length)],
            message: 'This is a sample toast notification!',
            duration: 4000, // duration in milliseconds
            closeable: closable[Math.floor(Math.random() * closable.length)],
        });
    }

    return (
        <div>
            <AppButton onClick={triggerNotification}>
                Trigger Notification
            </AppButton>
        </div>
    );
}   