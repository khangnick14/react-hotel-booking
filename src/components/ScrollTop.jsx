import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showButton && (
        <div onClick={scroll}>
          <FaArrowUp
            size={20}
            className={
              showButton
                ? "fixed bottom-10 right-10 h-10 w-10 text-white bg-[var(--light-primary)] rounded-full"
                : "hidden"
            }
          />
        </div>
      )}
    </div>
  );
};

export default ScrollTop;
