function AddressPage() {
    const [customer, setCustomer] = React.useState(null);
    const [useDefaultShipping, setUseDefaultShipping] = React.useState(false);
    const [useDefaultBilling, setUseDefaultBilling] = React.useState(false);
    const [editShipping, setEditShipping] = React.useState(false);
    const [editBilling, setEditBilling] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    // switch to relying on React compiler
    const showDefaultShipping = React.useMemo(
        () => customer && !!customer.defaultShippingAddress,
        [customer]
    );
    const showDefaultBilling = React.useMemo(
        () => customer && !!customer.defaultBillingAddress,
        [customer]
    );

    React.useEffect(() => {
        // Simulate fetching customer data
        if (mockCustomer) {
            setCustomer(mockCustomer);
        }
        setEditShipping(!mockCustomer?.defaultShippingAddress);
        setEditBilling(!mockCustomer?.defaultBillingAddress);
    }, []);

    // use react-hook-form for form handling
    const submit = (event) => {
        event.preventDefault();
        let shippingAddress = null;
        let billingAddress = null;
        if (useDefaultShipping) {
            shippingAddress = customer.defaultShippingAddress;
        }

        if (useDefaultBilling) {
            billingAddress = customer.defaultBillingAddress;
        }

        console.log('Form submitted');
    }

    return (
        <>
            <CheckoutProgress />
            <h1 className="text-3xl font-bold mb-6">Address Page</h1>
            <div id="main-checkout-content" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <form className="md:col-span-2" onSubmit={submit}>
                    {showDefaultBilling && !editBilling && <DefaultAddress
                        address={customer.defaultBillingAddress}
                        onEdit={() => setEditBilling(true)}
                        onUse={() => setUseDefaultBilling(true)}
                        shouldUse={useDefaultBilling} />}
                    {editBilling && <CustomerAddress type="billing" />}

                    <hr className="my-4 text-transparent" />

                    {showDefaultShipping && !editShipping && <DefaultAddress
                        address={customer.defaultShippingAddress}
                        onEdit={() => setEditShipping(true)}
                        onUse={() => setUseDefaultShipping(true)}
                        shouldUse={useDefaultShipping} />}
                    {editShipping && <CustomerAddress type="shipping" />}
                     <div className="flex justify-center items-center mt-6 p-6 border border-gray-200 rounded-md">
                        <AppButton isPrimary isSubmit loading={loading} className="w-full md:max-w-2/3">
                            Continue to Payment
                        </AppButton>
                    </div>
                </form>
                <Cart mini={true} />
            </div>
        </>
    )
}