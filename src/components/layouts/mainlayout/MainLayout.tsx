import { useLocation, useOutlet } from "react-router-dom";
import SideNav from "../../shared/sideNav/SideNav";
import TopBar from "../../shared/topbar/TopBar";

const MainLayout = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute);

  return (
    <>
      <section className="overflow-hidden bg-black h-screen p-0 w-full flex">
        <section className="w-full flex">
          <section className="w-[18%]">
            <SideNav />
          </section>
          <section className="w-[82%]">
            <TopBar />
            {outlet}
          </section>
        </section>
      </section>
    </>
  );
};

export default MainLayout;
