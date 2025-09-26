function Notice() {
  const tickerRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const pausedRef = React.useRef(false);
  const delay = 3000;
  const noticeMessage = [
    "Free shipping above $200 🚚",
    "Sign up for our newsletter for 10% off your first order!",
    "Free returns within 30 days 📦",
  ];

  const nextMessage = () => {
    setCurrentIndex((prev) => {
      const nextIdx = (prev + 1) % noticeMessage.length;
      setPrevIndex(prev);
      return nextIdx;
    });
  }

  const handleMouseEnter = () => {
    pausedRef.current = true;
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    timeoutRef.current = setInterval(nextMessage, delay);
  };

  React.useEffect(() => {
    nextMessage();
    timeoutRef.current = setInterval(nextMessage, delay);
    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    // <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
    //     <p className="font-bold">Notice</p>
    //     <p>This is a notice message.</p>
    // </div>
    <div className="bg-green-950 text-white p-2 text-sm text-center relative" role="note">
      <div
        ref={tickerRef}
        className="h-6 overflow-hidden flex justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {noticeMessage.map((message, index) => {
          let transform = 'translateY(100%)'; // enter from bottom
          let opacity = 0;

          if (index === currentIndex) {
            transform = 'translateY(0%)';
            opacity = 1;
          } else if (index === prevIndex) {
            transform = 'translateY(-100%)'; // exit to top
            opacity = 0;
          }
          return (
            <p
              key={index}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                transform: transform,
              }}
            >
              {message}
            </p>
          )
        })}
      </div>
    </div>
  );
}
