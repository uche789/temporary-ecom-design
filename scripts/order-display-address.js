function OrderDisplayAddress({ type, className, address }) {
    const header = type === "billing" ? "Billing Address" : "Shipping Address";
    return (
        <div className={`border border-gray-300 p-4 rounded-md ${className}`}>
            <h2 className="text-lg font-bold">{header}</h2>
            <p className="m-2">
                {address.firstName} {address.lastName}<br />
                {address.street}<br />
                {address.city}, {address.state} {address.postalCode}
            </p>
            <div className="flex justify-end">
                <AppButton className="mr-2" isLink href="?checkout=&address">Edit</AppButton>
            </div>
        </div>
    );
}
