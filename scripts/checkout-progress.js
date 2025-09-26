function CheckoutProgress({ currentStep = 1 }) {
    const stepClass = 'w-full h-2 bg-gray-300 rounded overflow-hidden';
    const stepWrapperClass = 'flex-auto flex flex-col text-center text-sm';
    const innerBarClass = (active) => `
        h-2 bg-green-700 rounded transition-all duration-500 ease-in-out
        ${active ? 'w-full' : 'w-0'}
    `;
    return (
        <div className="checkout-progress flex justify-between w-full mb-6">
            <div className={`${stepWrapperClass} mr-1`}>
                <div className={stepClass}>
                    <div className={innerBarClass(currentStep >= 1)}></div>
                </div>
                <span>Address</span>
            </div>
            <div className={`${stepWrapperClass} mr-1`}>
                <div className={stepClass}>
                    <div className={innerBarClass(currentStep >= 2)}></div>
                </div>
                <span>Payment</span>
            </div>
            <div className={`${stepWrapperClass}`}>
                <div className={stepClass}>
                    <div className={innerBarClass(currentStep >= 3)}></div>
                </div>
                <span>Summary</span>
            </div>
        </div>
    );
}
