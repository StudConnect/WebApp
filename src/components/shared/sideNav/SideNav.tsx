import { useDispatch, useSelector } from "react-redux";
import { toggleSidenav } from "../../../features/unauth-features/ActionSlice";
import Logo from "../logo/Logo";
import { RootState } from "../../../types/Interface";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  useEffect(() => {
    const handleResize = () => {
      setShowLabels(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const RouteLinks = [
    {
      label: "Home",
      link: "/",
      icon: <GoHome />,
    },
    {
      label: "Search",
      link: "/search",
      icon: <GoSearch />,
    },
    {
      label: "Groups",
      link: "/groups",
      icon: <GrGroup />,
    },
    {
      label: "Resources",
      link: "/resources",
      icon: <GrResources />,
    },
    {
      label: "Mentors",
      link: "/mentors",
      icon: <SiCodementor />,
    },
    {
      label: "Events",
      link: "/events",
      icon: <BsCalendar4Event />,
    },
  ];

  const RouteBLinks = [
    {
      label: "Settings",
      link: "/settings",
      icon: <IoSettingsOutline />,
    },
    {
      label: "Log out",
      link: "/logout",
      icon: <FiLogOut />,
    },
  ];

  return (
    <section
      className={`h-full bg-black border-r border-bgray flex-col items-center gap-9 ${
        sidenav ? "sidenav-true" : "sidenav-false"
      }`}
    >
      <section className="w-full h-full flex-col gap-y-[40px] items-center inline-flex py-[26px] px-2 md:px-3">
        <section className="w-full h-full flex-col justify-between items-center inline-flex">
          <section onClick={onToggle}>
            <Logo />
          </section>
          <section className="w-full">
            <ul className="w-full flex flex-col gap-3">
              {RouteLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    className={`text-swhite transition-all ${
                      activeLink === item.link ? "bg-bgray" : "hover:bg-bgray"
                    } rounded-xl p-3 gap-2 flex items-center ${
                      showLabels ? "justify-left text-base" : "justify-center text-xl"
                    }`}
                    to={item.link}
                    onClick={() => setActiveLink(item.link)}
                  >
                    <span>{item.icon}</span>
                    {showLabels && (
                      <span
                        className={`hidden md:inline ${!showLabels ? "hidden" : ""}`}
                      >
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="w-full">
            <ul className="w-full flex flex-col gap-2">
              {RouteBLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    className={`text-swhite transition-all ${
                      activeLink === item.link ? "bg-bgray" : "hover:bg-bgray"
                    } rounded-xl p-3 gap-2 flex items-center ${
                      showLabels ? "justify-left text-base" : "justify-center text-xl"
                    }`}
                    to={item.link}
                    onClick={() => setActiveLink(item.link)}
                  >
                    <span>{item.icon}</span>
                    {showLabels && (
                      <span
                        className={`hidden md:inline ${!showLabels ? "hidden" : ""}`}
                      >
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default SideNav;
