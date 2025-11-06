// import React, { useEffect, ReactNode } from 'react';
// import { createPortal } from 'react-dom';

// interface ModalWindowProps {
//   onClose: () => void;
//   header?: ReactNode;
//   main: ReactNode;
//   footer?: ReactNode;
//   footerButtons?: ReactNode;
// }

function ModalWindow ({
    onClose,
    header,
    main,
    footer,
    footerButtons,
    widthClass,
    heightClass,
}) {

    const isMobile = useIsMobile();
    const modalWidthClass = widthClass || 'max-w-1/2';
    const modalHeightClass = heightClass || 'max-h-1/2';

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const modalContent = (
        <>
            {!isMobile && (
                <div className="fixed inset-0 w-screen h-screen bg-white opacity-40" />
            )}
            <div className={`fixed w-full h-full md:${modalWidthClass} md:${modalHeightClass} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]`}>
                <div className="bg-white max-h-full max-w-full shadow-[0px_4px_80px_rgba(0,0,0,0.25)] flex flex-col rounded-lg md:h-screen md:w-screen md:relative">
                    <div className="relative px-6 py-5 text-lg font-semibold border-b border-gray-300">
                        {header && (
                            <h3
                                className="p-0 m-0"
                                data-testid="modal-window-title"
                            >
                                {header}
                            </h3>
                        )}
                        <button
                            className="absolute right-6 top-5 text-gray-500 p-0"
                            aria-label="close modal window"
                            onClick={onClose}
                        >
                            <SvgIcon aria-hidden="true" name="close" width={26} />
                        </button>
                    </div>
                    <div
                        className="p-6 overflow-auto"
                        data-testid="modal-window-main"
                    >
                        {main}
                    </div>
                    {footerButtons ? (
                        <div
                            className={`flex items-center justify-end border-t border-gray-300 p-6 md:box-border md:w-full ${isMobile
                                    ? '[&>button]:w-full'
                                    : ''
                                } [&>button]:ml-1.5`}
                            data-testid="modal-window-footer-buttons"
                        >
                            {footerButtons}
                        </div>
                    ) : (
                        footer && (
                            <div
                                className="p-6"
                                data-testid="modal-window-footer"
                            >
                                {footer}
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};