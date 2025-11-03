function PaymentPage() {
    const listboxRef = React.useRef(null);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(mockPaymentMethods[0].key);

    const onKeyDown = (event) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            // Move focus to the next payment method
            // const currentOption = 
            const currentOption = listboxRef.current.querySelector('[aria-selected="true"]')
            const newOption = event.key === 'ArrowDown' ?
                currentOption.nextSibling || listboxRef.current.firstChild :
                currentOption.previousSibling || listboxRef.current.lastChild;
            if (newOption) {
                event.preventDefault();
                listboxRef.current.setAttribute('aria-activedescendant', newOption.id);
                currentOption.setAttribute('aria-selected', 'false');
                newOption.setAttribute('aria-selected', 'true');
                setSelectedPaymentMethod(newOption.id);
            }
        }        
    }

    return (
        <>
            <div className="md:col-span-2">
                <div
                    role="listbox"
                    aria-label="Payment Methods"
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    aria-activedescendant={selectedPaymentMethod}
                    ref={listboxRef}
                >
                    {mockPaymentMethods.map(method => (
                        <PaymentMethod
                            paymentMethod={method}
                            key={method.key}
                            selected={method.key === selectedPaymentMethod}
                            handleSelect={(method) => setSelectedPaymentMethod(method.key)}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center mt-6 p-6 border border-gray-200 rounded-md" aria-label="Continue to Payment">
                    <AppButton isPrimary className="w-full md:max-w-2/3">
                        Continue to Payment
                    </AppButton>
                </div>
            </div>
        </>
    );
}