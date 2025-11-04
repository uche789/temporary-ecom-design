function CustomerAddress({ type, hideShippingAddress = () => {}, address = null }) {
    const [defaultAddress, setDefaultAddress] = React.useState(address?.isDefault || false);
    const [shippingSameAsBilling, setShippingSameAsBilling] = React.useState(false);
    const [defaultShippingAddress, setDefaultShippingAddress] = React.useState(false);

    const header = type === "billing" ? "Billing Address" : "Shipping Address";
    return (
        <article>
            <h2 className="text-lg font-bold mb-4">{header}</h2>
            <BaseInput label="First Name" type="text" name={`${type}_first_name`} className="mb-4" value={address?.firstName || ""} />
            <BaseInput label="Last Name" type="text" name={`${type}_last_name`} className="mb-4" value={address?.lastName || ""} />
            <BaseInput label="Street Address" type="text" name={`${type}_street`} className="mb-4" value={address?.street || ""} />
            <BaseInput label="City" type="text" name={`${type}_city`} className="mb-4" value={address?.city || ""} />
            <BaseInput label="State" type="text" name={`${type}_state`} className="mb-4" value={address?.state || ""} />
            <BaseInput label="Postal Code" type="text" name={`${type}_postal_code`} className="mb-4" value={address?.postalCode || ""} />
            <BaseInput label="Phone Number" type="text" name={`${type}_phone`} className="mb-4" value={address?.phone || ""} />
            <BaseSelect label="Country" name={`${type}_country`} selectClassName="mb-4 w-full" options={[
                { value: "de", label: "Germany" },
                { value: "ca", label: "Canada" },
            ]} />
            <InputCheckbox className="mb-4" name={`${type}_default`} checked={defaultAddress} onChange={(e) => setDefaultAddress(e.target.checked)}>
                Set as default {type === "billing" ? "billing" : "shipping"} address
            </InputCheckbox>
            <div className="mt-4">
                {type === 'billing' && (
                    <>
                    <InputCheckbox
                        className="mb-4"
                        name="shipping_same_as_billing"
                        checked={shippingSameAsBilling}
                        onChange={(e) => {
                            setShippingSameAsBilling(e.target.checked);
                            setDefaultShippingAddress(false);
                            // hideShippingAddress(e.target.checked);
                        }}
                    >
                        Use billing address as shipping address
                    </InputCheckbox>
                    { shippingSameAsBilling &&
                        <InputCheckbox
                            className="mb-4"
                            name="shipping_same_as_billing_default"
                            checked={defaultShippingAddress}
                            onChange={(e) => {
                                hideShippingAddress(e.target.checked);
                                setDefaultShippingAddress(e.target.checked);
                            }}
                        >
                            Set as default shipping address
                        </InputCheckbox>}
                    </>
                )}
            </div>
        </article>
    );
}
