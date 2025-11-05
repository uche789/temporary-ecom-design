function AddressPage() {
    const [customer, setCustomer] = React.useState(null);
    const [useDefaultShipping, setUseDefaultShipping] = React.useState(false);
    const [useDefaultBilling, setUseDefaultBilling] = React.useState(false);
    const [editShipping, setEditShipping] = React.useState(false);
    const [editBilling, setEditBilling] = React.useState(false);
    const [createBilling, setCreateBilling] = React.useState(false);
    const [createShipping, setCreateShipping] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [hideShipping, setHideShipping] = React.useState(false);
    const divider = <hr className="my-6 border-t border-gray-300" />;

    const mockOrderAddress = {
        use: false,
        shipping: {
            firstName: 'Alice',
            lastName: 'Smith',
            street: '456 Oak Avenue',
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
            street: '789 Pine Road',
            city: 'Gotham',
            state: 'NJ',
            postalCode: '07097',
            country: 'US',
            phone: '555-987-6543',
            isDefault: false,
        }
    }

    const orderAddress = React.useMemo(() => mockOrderAddress.use ? mockOrderAddress : null, []);

    // switch to relying on React compiler
    const showDefaultShipping = React.useMemo(
        () => {
            if (orderAddress?.shipping?.isDefault) {
                return false;
            }
            return customer && !!customer.defaultShippingAddress
        },
        [customer]
    );
    const showDefaultBilling = React.useMemo(
        () => {
            if (orderAddress?.billing?.isDefault) {
                return false;
            }
            return customer && !!customer.defaultBillingAddress
        },
        [customer]
    );

    const billingAddress = React.useMemo(
        () => {
            if (orderAddress?.billing) {
                return orderAddress.billing;
            }
            return showDefaultBilling ? { ...customer.defaultBillingAddress, isDefault: true } : null
        },
        [customer]
    );
    const shippingAddress = React.useMemo(
        () => {
            if (orderAddress?.shipping) {
                return orderAddress.shipping;
            }
            return showDefaultShipping ? { ...customer.defaultShippingAddress, isDefault: true } : null
        },
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
        let shippingAddressPayload = null;
        let billingAddressPayload = null;
        if (useDefaultShipping) {
            shippingAddressPayload = customer.defaultShippingAddress;
        }

        if (useDefaultBilling) {
            billingAddressPayload = customer.defaultBillingAddress;
        }

        console.log('Form submitted');
    }

    const hideShippingAddress = (hide) => {
        console.log('Hide shipping address:', hide);
        setHideShipping(hide);
    }

    return (
        <form className="md:col-span-2" onSubmit={submit}>
            <section>
                {showDefaultBilling && !(editBilling || createBilling) && <DisplayAddress
                    type="billing"
                    address={billingAddress}
                    onEdit={() => {
                        setEditBilling(true);
                        setCreateBilling(false);
                    }}
                    onCreate={() => {
                        setCreateBilling(true);
                        setEditBilling(false);
                        setUseDefaultBilling(false);
                    }}
                    onUse={() => setUseDefaultBilling(true)}
                    shouldUse={useDefaultBilling} />}
                {(createBilling || editBilling) && 
                    <EditCustomerAddress
                        type="billing"
                        address={editBilling ? billingAddress : undefined}
                        onHideShippingAddress={hideShippingAddress}
                    />
                }
            </section>
            <section className={hideShipping ? 'hidden' : ''}>
                {divider}
                {showDefaultShipping && !(editShipping || createShipping) && <DisplayAddress
                    type="shipping"
                    address={shippingAddress}
                    onEdit={() => {
                        setEditShipping(true);
                        setCreateShipping(false);
                    }}
                    onCreate={() => {
                        setEditShipping(false);
                        setCreateShipping(true);
                        setUseDefaultShipping(false);
                    }}
                    onUse={() => setUseDefaultShipping(true)}
                    shouldUse={useDefaultShipping} />}
                {(createShipping || editShipping) && 
                    <EditCustomerAddress
                        type="shipping"
                        address={editShipping ? shippingAddress : undefined}
                    />
                }
            </section>
            <div className="flex justify-center items-center mt-6 p-6 border border-gray-200 rounded-md">
                <AppButton isPrimary isSubmit loading={loading} className="w-full md:max-w-2/3">
                    Continue to Payment
                </AppButton>
            </div>
        </form>
    )
}