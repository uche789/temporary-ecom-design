function InputCheckbox({ children, checked = false, onChange, name, className }) {
    const randomId = () => `input-checkbox-${Math.random().toString(36).slice(2, 9)}`;
    const id = randomId();

    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                name={name}
                className="w-4 h-4 rounded-sm focus:outline-none accent-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
            />
            <label
                htmlFor={id}
                className="text-gray-800 select-none cursor-pointer"
            >
                {children}
            </label>
        </div>

    );
}