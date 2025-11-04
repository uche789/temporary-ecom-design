function AppButton({
    children,
    onClick,
    className = '',
    isPrimary,
    isSubmit,
    isDisabled,
    isLink,
    href,
    bgColor = 'bg-white',
    textColor = 'text-black',
    loading = false
}) {
    const buttonClasses = React.useMemo(() => {
        let colorClass = isPrimary
            ? "bg-green-700 !text-white hover:bg-green-800"
            : `${bgColor} border border-gray-300 ${textColor} hover:bg-gray-100 hover:text-black`;

        if (isDisabled) {
            colorClass = "bg-neutral-200 cursor-not-allowed text-neutral-400";
        }
        if (isLink && href) {
            colorClass += " block !no-underline text-center";
        }
        return `${colorClass} cursor-pointer py-2 px-4 rounded-lg font-semibold ${className}`;
    }, [className, isDisabled, isPrimary]);

    if (isLink && href) {
        return (
            <a href={href} className={buttonClasses}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={isSubmit ? "submit" : "button"}
            onClick={onClick}
            className={buttonClasses}
            disabled={isDisabled || loading}
        >
            {loading ? <span className="animate-pulse">Loading...</span> : children}
        </button>
    );
}
