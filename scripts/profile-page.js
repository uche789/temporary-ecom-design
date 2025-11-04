function ProfilePage() {
    const [customer] = React.useState(mockCustomer);

    const CustomerAddress = ({ address }) => (
        <div className="mt-2">
            <p>{address.firstName} {address.lastName}</p>
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.postalCode}</p>
            <p>{address.country}</p>
        </div>
    );

    const classSection = "text-2xl font-semibold mt-6 mb-4";
    return <>
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <p>Here you can view and manage your profile information.</p>

        <section>
            <h2 className={classSection}>Personal Details</h2>
            <div className="bg-gray-50 p-4 rounded">
                <p><strong>Name:</strong> {customer.firstName} {customer.lastName}</p>
                <p><strong>Date of Birth:</strong> {customer.dob}</p>
                <p><strong>Phone:</strong> {customer.phone}</p>
                <div className="mt-4 space-x-2 space-y-2">
                    <AppButton>Update Details</AppButton>
                    <AppButton>Change Password</AppButton>
                </div>
            </div>
        </section>

        <section>
            <h2 className={classSection}>Email Address</h2>
            <div className="bg-gray-50 p-4 rounded">
                <p><strong>Primary Email:</strong> {customer.email}</p>
                <div className="mt-4">
                    <AppButton>Change Email</AppButton>
                </div>
            </div>
        </section>

        <section>
            <h2 className={classSection}>Manage Addresses</h2>
            <h3 className="text-xl font-semibold mb-2">Default Billing Address</h3>
            <div className="bg-gray-50 p-4 rounded">
                { customer.defaultBillingAddress ? (
                    <>
                        {CustomerAddress({ address: customer.defaultBillingAddress })}
                        <div className="mt-4">
                            <AppButton>Update Address</AppButton>
                        </div>
                    </>
                ) : (
                    <p>No default billing address set.</p>
                )}
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Default Shipping Address</h3>
            <div className="bg-gray-50 p-4 rounded">
                { customer.defaultShippingAddress ? (
                    <>
                        {CustomerAddress({ address: customer.defaultShippingAddress })}
                        <div className="mt-4">
                            <AppButton>Update Address</AppButton>
                        </div>
                    </>
                ) : (
                    <p>No default shipping address set.</p>
                )}
            </div>
        </section>

        <section>
            <h2 className={classSection}>Email Preferences</h2>
            <div className="bg-gray-50 p-4 rounded">
                <p><strong>Newsletter:</strong> Subscribed</p>
                <div className="mt-4">
                    {customer.newsletterSubscribed 
                        ? <AppButton>Unsubscribe</AppButton>
                        : <AppButton>Subscribe</AppButton>
                    }
                </div>
            </div>
        </section>

        <section>
            <h2 className={classSection}>Delete Account</h2>
            <div className="bg-gray-50 p-4 rounded">
                <p><strong>Are you sure you want to delete your account? This action cannot be undone.</strong></p>
                <div className="mt-4 mb-2">
                    <AppButton bgColor="bg-red-500" textColor="text-white">Delete Account</AppButton>
                </div>
            </div>
        </section>
    </>;
}
