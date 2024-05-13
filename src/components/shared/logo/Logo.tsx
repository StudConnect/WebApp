import { Link } from "react-router-dom";
import LogoImage from "../../../assets/images/sc-black-removebg-cr.png";
import LogoImageLong from "../../../assets/images/2-removebg-preview.png";
import { useEffect, useState } from "react";

const Logo = () => {
  const [showLong, setShowLong] = useState<boolean>(true);
  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update the showLabels state accordingly
      setShowLong(window.innerWidth >= 768); // Adjust the breakpoint value as needed
    };

    // Add event listener for window resize events
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={`${showLong ? 'long logo-container-long' : 'short logo-container-short'}`}>
      <Link to="/">
        <img src={showLong ? LogoImageLong : LogoImage} alt="StudConnect Logo" />
      </Link>
    </section>
  );
};

export default Logo;
