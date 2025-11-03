function OrderSummaryPage() {
    return (
        <div className="md:col-span-2">
            <DisplayAddress address={mockCart.billingAddress} className="mb-6" type="billing" />
            <DisplayAddress address={mockCart.shippingAddress} className="mb-6" type="shipping" />
            <div className="md:flex md:gap-6 mb-6">
                <section className="md:flex-1 md:mb-0 mb-6 border border-gray-200 p-4 rounded-md">
                    <h2 className="text-lg font-bold">Select Payment method</h2>
                    <p>{mockCart.paymentMethod.name}</p>
                    <div className="flex justify-end">
                        <AppButton className="mr-2" isLink href="?checkout=&payment">Edit</AppButton>
                    </div>
                </section>
                {mockCart.voucher && (
                    <section className="md:flex-1 border border-gray-200 p-4 rounded-md bg-gray-50">
                        <h2 className="text-lg font-bold">Voucher</h2>
                        <p>{mockCart.voucher.code}</p>
                        <p>{mockCart.voucher.description}</p>
                    </section>
                )}
            </div>
            <div className="flex justify-center items-center mt-6 p-6 border border-gray-200 rounded-md" aria-label="Continue to Payment">
                <AppButton isPrimary className="w-full md:max-w-2/3">
                    Confirm Order
                </AppButton>
            </div>
        </div>
    );
}