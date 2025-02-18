import React, { useState } from "react";
import { useCookies } from "react-cookie";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [isVisible, setIsVisible] = useState(!cookies.cookieConsent);

  const handleAccept = () => {
    setCookie("cookieConsent", "true", { path: "/" });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-orange-300 text-gray-800 py-4 px-6 flex justify-between items-center z-50">
      <div className="text-lg">
        Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.
      </div>
      <button
        onClick={handleAccept}
        className="bg-gray-800 text-orange-300 px-4 py-2 rounded-lg hover:bg-gray-700"
      >
        Cookies erlauben
      </button>
    </div>
  );
};

export default CookieConsent;
