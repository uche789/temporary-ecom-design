function DefaultAddress({ address, type, className = '', onEdit, onCreate, onUse, shouldUse = true }) {
    const header = <h2 className="text-lg font-bold">Default {type === 'billing' ? 'Billing' : 'Shipping'} Address</h2>;
    return (
        <article className={`border border-gray-300 p-4 rounded-md ${className}`}>
            {header}
            <p className="m-2">
                {address.firstName} {address.lastName}<br />
                {address.street}<br />
                {address.city}, {address.state} {address.postalCode}
            </p>
            <div className="flex justify-end">
                {
                    !shouldUse && (
                        <>
                            <AppButton className="mr-2" onClick={onCreate}>New</AppButton>
                            <AppButton className="mr-2" onClick={onEdit}>Edit</AppButton>
                            <AppButton isPrimary onClick={onUse}>Use</AppButton>
                        </>
                    )
                }
                {shouldUse && <span className="text-green-600"><SvgIcon name="check" width={36} height={36} /></span>}
            </div>
        </article>
    );
}
