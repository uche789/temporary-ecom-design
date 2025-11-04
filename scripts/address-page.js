function AddressPage() {
    const [customer, setCustomer] = React.useState(null);
    const [useDefaultShipping, setUseDefaultShipping] = React.useState(false);
    const [useDefaultBilling, setUseDefaultBilling] = React.useState(false);
    const [editShipping, setEditShipping] = React.useState(false);
    const [editBilling, setEditBilling] = React.useState(false);
    const [createBilling, setCreateBilling] = React.useState(false);
    const [createShipping, setCreateShipping] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const orderAddress = {
        use: false,
        shipping: {
            firstName: 'Alice',
            lastName: 'Smith',
            address: '456 Oak Avenue',
            city: 'Metropolis',
            state: 'NY',
            postalCode: '10001',
            country: 'US',
            phone: '555-123-4567',
            isDefault: false,
        },
        billing: {
            firstName: 'Bob',
            lastName: 'Johnson',
            address: '789 Pine Road',
            city: 'Gotham',
            state: 'NJ',
            postalCode: '07097',
            country: 'US',
            phone: '555-987-6543',
            isDefault: false,
        }
    }

    // switch to relying on React compiler
    const showDefaultShipping = React.useMemo(
        () => customer && !!customer.defaultShippingAddress,
        [customer]
    );
    const showDefaultBilling = React.useMemo(
        () => customer && !!customer.defaultBillingAddress,
        [customer]
    );

    const billingAddress = React.useMemo(
        () => showDefaultBilling ? { ...customer.defaultBillingAddress, isDefault: true } : null,
        [customer]
    );
    const shippingAddress = React.useMemo(
        () => showDefaultShipping ? { ...customer.defaultShippingAddress, isDefault: true } : null,
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

    const hideShippingAddress = (hide) => {
        if (hide) {
            setEditShipping(false);
        }
    }

    return (
        <form className="md:col-span-2" onSubmit={submit}>
            {showDefaultBilling && !(editBilling || createBilling) && <DefaultAddress
                address={customer.defaultBillingAddress}
                onEdit={() => {
                    setEditBilling(true);
                    setCreateBilling(false);
                }}
                onCreate={() => {
                    setCreateBilling(true);
                    setEditBilling(false);
                }}
                onUse={() => setUseDefaultBilling(true)}
                shouldUse={useDefaultBilling} />}
            {(createBilling || editBilling) && 
                <CustomerAddress
                    type="billing"
                    address={editBilling ? billingAddress : undefined}
                />
            }

            <hr className="my-4 text-transparent" />

            {showDefaultShipping && !(editShipping || createShipping) && <DefaultAddress
                address={customer.defaultShippingAddress}
                onEdit={() => {
                    setEditShipping(true);
                    setCreateShipping(false);
                }}
                onCreate={() => {
                    setEditShipping(false);
                    setCreateShipping(true);
                }}
                onUse={() => setUseDefaultShipping(true)}
                shouldUse={useDefaultShipping} />}
            {(createShipping || editShipping) && 
                <CustomerAddress
                    type="shipping"
                    address={editShipping ? shippingAddress : undefined}
                />
            }
            <div className="flex justify-center items-center mt-6 p-6 border border-gray-200 rounded-md">
                <AppButton isPrimary isSubmit loading={loading} className="w-full md:max-w-2/3">
                    Continue to Payment
                </AppButton>
            </div>
        </form>
    )
}