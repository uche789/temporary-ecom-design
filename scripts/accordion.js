function Accordion({ children, isOpen, onToggle }) {
    const randomId = () => `accordion-${Math.random().toString(36).slice(2, 9)}`;
    const id = randomId();

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <h3 className="accordion-header">
                <button onClick={onToggle} aria-expanded={isOpen} id={id}>
                    {children}
                </button>
            </h3>
            {isOpen && <div
                className="accordion-content"
                role="region"
                aria-labelledby={id}
                >
                    {children}
                </div>
            }
        </div>
    );
}
