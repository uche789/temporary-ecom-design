function PaymentMethod({paymentMethod, selected = false, handleSelect = () => {}}) {
    const classDisabled = paymentMethod.disabled ? 'opacity-50 cursor-not-allowed' : '';
    const classSelected = selected && !paymentMethod.disabled ? 'bg-green-800 text-white' : '';
    return (
        <div 
            className={`border border-gray-500 p-4 cursor-pointer rounded-md shadow-sm flex mb-4 ${classSelected} ${classDisabled}`}
            aria-selected={selected}
            role="option"
            aria-label={paymentMethod.name}
            tabIndex={paymentMethod.disabled ? -1 : 0}
            id={paymentMethod.key}
            onClick={paymentMethod.disabled ? null : () => handleSelect(paymentMethod)}
        >
            <div className="mr-4" aria-hidden="true">
                <SvgIcon width={30} height={30} name={paymentMethod.icon} className="inline-block mr-2" />
            </div>
            <div>
                <span>{paymentMethod.name}</span>
                <p>{paymentMethod.description}</p>
            </div>
        </div>
    );
}