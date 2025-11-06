function useToastNotification() {
    return {
        addNotification: (details) => {
            if (!details) {
                console.error('No notification details provided');
                return;
            }
            window.dispatchEvent(new CustomEvent('new-notification', { detail: details }));
        },
    }
}
