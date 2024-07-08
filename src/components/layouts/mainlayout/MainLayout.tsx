import { useLocation, useOutlet } from "react-router-dom";
import SideNav from "../../shared/sideNav/SideNav";
import TopBar from "../../shared/topbar/TopBar";
import BottomNav from "../../common/bottomNav/BottomNav";

const MainLayout = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute);

  return (
    <>
      <section className="overflow-hidden bg-black h-screen p-0 w-full flex ">
        <section className="w-full flex">
          <section className="hidden sm:block w-[18%]">
            <SideNav />
          </section>
          <section className="w-full sm:w-[82%]">
            <TopBar />
            {outlet}
          </section>
          <BottomNav />
        </section>
      </section>
    </>
  );
};

export default MainLayout;
