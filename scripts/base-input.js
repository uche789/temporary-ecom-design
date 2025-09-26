function BaseInput({
        value,
        label,
        type = 'text',
        icon,
        onChange,
        placeholder,
        showClearButton,
        isPassword,
        classInputField = '',
        className = '',
        name,
        isRequired,
        min,
        max,
        readonly,
        error = '',
        hideLabel = false,
    }) {
    const randomId = () => `input-${type}-${Math.random().toString(36).slice(2, 9)}`;
    const id = randomId();

    const rounded = !classInputField.includes('rounded') ? 'rounded-lg' : '';

    return (
        <div className={`base-input ${className}`}>
            <label htmlFor={id} className={'block text-sm font-medium text-gray-700' + (hideLabel ? ' sr-only' : '')}>
                {label}
                {isRequired && <span className="text-red-500">*</span>}
            </label>
            <div className={`flex items-center border ${error ? 'border-red-500' : 'border-gray-300'} p-2 ${rounded} focus-within:border-green-500 ${classInputField}`}>
                {icon && <SvgIcon name={icon}/>}
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    min={min}
                    name={name}
                    max={max}
                    readOnly={readonly}
                    className="focus:outline-none flex-1 mx-2"
                />
                {showClearButton && !!value && !isPassword && (
                    <button
                        type="button"
                        onClick={() => onChange({ target: { value: '' } })}
                        className="ml-2 hover:text-gray-200"
                    >
                        <SvgIcon name="close" />
                    </button>
                )}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
