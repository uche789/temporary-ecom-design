function CustomerAddress({ type }) {
    const [defaultAddress, setDefaultAddress] = React.useState(false);
    const header = type === "billing" ? "Billing Address" : "Shipping Address";
    return (
        <article>
            <h2 className="text-lg font-bold mb-4">{header}</h2>
            <BaseInput label="First Name" type="text" name={`${type}_first_name`} className="mb-4" />
            <BaseInput label="Last Name" type="text" name={`${type}_last_name`} className="mb-4" />
            <BaseInput label="Address" type="text" name={`${type}_address`} className="mb-4" />
            <BaseInput label="City" type="text" name={`${type}_city`} className="mb-4" />
            <BaseInput label="State" type="text" name={`${type}_state`} className="mb-4" />
            <BaseInput label="Postal Code" type="text" name={`${type}_postal_code`} className="mb-4" />
            <BaseInput label="phone" type="text" name={`${type}_phone`} className="mb-4" />
            <BaseSelect label="Country" name={`${type}_country`} selectClassName="mb-4 w-full" options={[
                { value: "de", label: "Germany" },
                { value: "ca", label: "Canada" },
            ]} />
            <InputCheckbox className="mb-4" name={`${type}_default`} checked={defaultAddress} onChange={(e) => setDefaultAddress(e.target.checked)}>
                Select as default {type.toLowerCase()}
            </InputCheckbox>
        </article>
    );
}
