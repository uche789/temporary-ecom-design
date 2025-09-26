function AppButton({
    children,
    onClick,
    className = '',
    isPrimary,
    isSubmit,
    isDisabled,
    isLink,
    href,
    loading = false
}) {
    const buttonClasses = React.useMemo(() => {
        let colorClass = isPrimary
            ? "bg-green-700 !text-white hover:bg-green-800"
            : "bg-white border border-gray-300 !text-black hover:bg-gray-100";

        if (isDisabled) {
            colorClass = "bg-neutral-200 cursor-not-allowed text-neutral-400";
        }
        if (isLink && href) {
            colorClass += " block !no-underline text-center";
        }
        return `${colorClass} py-2 px-4 rounded-lg font-semibold ${className}`;
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
