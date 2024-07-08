import { BsCalendar4Event } from "react-icons/bs";
import { GoHome, GoSearch } from "react-icons/go";
import { GrGroup, GrResources } from "react-icons/gr";
import { SiCodementor } from "react-icons/si";
import { Link } from "react-router-dom";

const BottomNav = () => {

  const iconStyles = "text-xl"

  const RouteLinks = [
    {
      label: "Home",
      link: "/",
      icon: <GoHome className={iconStyles} />
    },
    {
      label: "Search",
      link: "/search",
      icon: <GoSearch className={iconStyles} />
    },
    {
      label: "Groups",
      link: "/groups",
      icon: <GrGroup className={iconStyles} />
    },
    {
      label: "Resources",
      link: "/resources",
      icon: <GrResources className={iconStyles} />
    },
    {
      label: "Mentors",
      link: "/mentors",
      icon: <SiCodementor className={iconStyles} />
    },
    {
      label: "Events",
      link: "/events",
      icon: <BsCalendar4Event className={iconStyles} />
    },
  ]
  return (
    <section className="absolute block sm:hidden inset-x-0 bottom-0 bg-black">
      <section className="w-full py-2">
        <ul className="w-full flex flex-row gap-3 justify-around">
          {RouteLinks.map((item, i) => (
            <li key={i}>
              <Link className={`text-swhite transition-all hover:bg-bgray rounded-xl p-3 gap-2 flex items-center justify-center text-xl"}`} to={item.link}>
                <span>{item.icon}</span></Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default BottomNav;
