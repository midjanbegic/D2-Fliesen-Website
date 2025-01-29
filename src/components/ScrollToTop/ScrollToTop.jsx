import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 md:bottom-6 right-6 p-3 rounded-full bg-gray-800 text-white shadow-md 
      transition-opacity duration-300 z-50 ${show ? "opacity-100" : "opacity-0"} hover:bg-gray-700`}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
