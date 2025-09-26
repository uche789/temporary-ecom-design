function InputRadio({ children, checked = false, onChange, name }) {
    const randomId = () => `input-radio-${Math.random().toString(36).slice(2, 9)}`;
    const id = randomId();

    return (
        <div className="flex items-center space-x-2">
            <input
                id={id}
                type="radio"
                checked={checked}
                onChange={onChange}
                name={name}
                className="focus:outline-none w-4 h-4 accent-green-700  focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
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