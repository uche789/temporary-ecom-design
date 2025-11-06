/* Example usage: To test the notification system, you can dispatch custom events in the browser console like so:
window.dispatchEvent(
  new CustomEvent('new-notification', {
    detail: { title: 'Success', message: 'File uploaded!', type: 'success', duration: 5000, closeable: true },
  })
);

window.dispatchEvent(
  new CustomEvent('new-notification', {
    detail: { title: 'Error', message: 'Failed to save changes.', type: 'error', duration: 7000, closeable: false },
  })
);

window.dispatchEvent(
  new CustomEvent('new-notification', {
    detail: { title: 'Info', message: 'New update available. Please refresh. If you have unsaved changes, please save them first. Contact support for assistance.', type: 'info', duration: 3000, closeable: true },
  })
);

window.dispatchEvent(
  new CustomEvent('new-notification', {
    detail: { title: 'Warning', message: 'Storage space running low.', type: 'warning', duration: 20000, closeable: true },
  })
);
*/

function SampleNotifications() {
    const { addNotification } = useToastNotification();

    const types = ['info', 'success', 'warning', 'error'];
    const closable = [true, false];

    const triggerNotification = () => {
        addNotification({
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