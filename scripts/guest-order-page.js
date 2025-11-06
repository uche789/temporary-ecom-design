function GuestOrderPage() {
    return (
        <Card className="max-w-120 m-auto">
            <h1 className="text-xl font-bold mb-2">Guest Order Page</h1>
            <p className="mb-4"> Please enter your order details below:</p>

            <form>
                <div className="mb-4">
                    <BaseInput
                        type="text"
                        label="Order Number"
                        placeholder="Enter your order number"
                        isFullWidth
                    />
                </div>
                <div className="mb-4">
                    <BaseInput
                        type="email"
                        label="Email Address"
                        placeholder="Enter your email address"
                        isFullWidth
                    />
                </div>
                <AppButton type="submit" isPrimary className="w-full mt-2">View Order</AppButton>
            </form>
        </Card>
    );
}
