import React, { useState, useEffect } from "react";

import Accomidations from "../components/Accomedations/TopHotels";

import BudgetHotels from "../components/Accomedations/BudgetHotels";

function Accomidation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile styles
  const mobileContentStyle = {
    marginTop: "120px",
    width: "100%",
  };

  const mobileBudgetHotelsStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    padding: "0 10px",
  };

  // Laptop/Desktop styles
  const desktopContentStyle = {
    marginTop: "120px",
    width: "100%",
    marginLeft: "100px",
  };

  const desktopBudgetHotelsStyle = {
    marginLeft: "150px",
    marginRight: "50px",
  };

  return (
    <div style={{ width: "100%", overflowX: "hidden", margin: 0, padding: 0 }}>
      <div style={isMobile ? mobileContentStyle : desktopContentStyle}>
        <Accomidations />
      </div>
      <div
        style={isMobile ? mobileBudgetHotelsStyle : desktopBudgetHotelsStyle}
      >
        <BudgetHotels />
      </div>
    </div>
  );
}

export default Accomidation;
