function BaseSelect({ options, onChange, value, name, className, selectClassName, label }) {
    const randomId = () => `select-${Math.random().toString(36).slice(2, 9)}`;
    const id = randomId();

    return (
        <div className={`${className}`}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select id={id} name={name} className={`border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full ${selectClassName}`} onChange={onChange} value={value}>
                <option value="">Select an option</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}