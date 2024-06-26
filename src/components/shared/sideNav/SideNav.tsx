import { useDispatch, useSelector } from "react-redux";
import { toggleSidenav } from "../../../features/unauth-features/ActionSlice";
import Logo from "../logo/Logo";
import { RootState } from "../../../types/Interface";
import { Link } from "react-router-dom";
import { GoHome, GoSearch } from "react-icons/go";
import { GrGroup, GrResources } from "react-icons/gr";
import { SiCodementor } from "react-icons/si";
import { BsCalendar4Event } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";

const SideNav: React.FC = () => {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state: RootState) => state.action);
  const onToggle = () => {
    dispatch(toggleSidenav(!sidenav));
  };
  const [showLabels, setShowLabels] = useState<boolean>(true);
  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update the showLabels state accordingly
      setShowLabels(window.innerWidth >= 768); // Adjust the breakpoint value as needed
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
  const RouteLinks = [
    {
      label: "Home",
      link: "/",
      icon: <GoHome />
    },
    {
      label: "Search",
      link: "/",
      icon: <GoSearch />
    },
    {
      label: "Groups",
      link: "/",
      icon: <GrGroup />
    },
    {
      label: "Resources",
      link: "/",
      icon: <GrResources />
    },
    {
      label: "Mentors",
      link: "/",
      icon: <SiCodementor />
    },
    {
      label: "Events",
      link: "/",
      icon: <BsCalendar4Event />
    },
  ]
  const RouteBLinks = [
    {
      label: "Settings",
      link: "/",
      icon: <IoSettingsOutline />
    },
    {
      label: "Log out",
      link: "/",
      icon: <FiLogOut />
    },
  ]
  return (
    <>
      <section
        className={`h-full bg-black border-r border-bgray flex-col items-center gap-9  ${sidenav ? "sidenav-true" : "sidenav-false"
          }`}
      >
        <section className="w-full h-full flex-col gap-y-[40px] items-center inline-flex py-[26px] px-2 md:px-3">
          <section className="w-full h-full flex-col justify-between items-center inline-flex">
            <section className="" onClick={onToggle}>
              <Logo />
            </section>
            <section className="w-full">
              <ul className="w-full flex flex-col gap-3">
                {RouteLinks.map((item, i) => (
                  <li key={i}>
                    <Link className={`text-swhite transition-all hover:bg-bgray rounded-xl p-3 gap-2 flex items-center ${showLabels ? "justify-left text-base" : "justify-center text-xl"}`} to={""}>
                      <span>{item.icon}</span>
                      {showLabels && (
                        <span className={`hidden md:inline ${!showLabels ? "hidden" : ""}`}>{item.label}</span>)}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="w-full">
              <ul className="w-full flex flex-col gap-2">
                {RouteBLinks.map((item, i) => (
                  <li key={i}>
                    <Link className={`text-swhite transition-all hover:bg-bgray rounded-xl p-3 gap-2 flex items-center ${showLabels ? "justify-left text-base" : "justify-center text-xl"}`} to={""}>
                      <span>{item.icon}</span>
                      {showLabels && (
                        <span className={`hidden md:inline ${!showLabels ? "hidden" : ""}`}>{item.label}</span>)}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SideNav;
