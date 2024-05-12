import { Link, useNavigate } from "react-router-dom";
import { BsBell, BsList } from "react-icons/bs";
import { ButtonBg } from "../buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidenav } from "../../../features/unauth-features/ActionSlice";
import { RootState } from "../../../types/Interface";
import avatar from "../../../assets/images/horjet.jpg"
import { TfiHelpAlt } from "react-icons/tfi";

const TopBar: React.FC = () => {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state: RootState) => state.action);
  console.log(sidenav)
  const navigate = useNavigate()
  const onToggle = () => {
    dispatch(toggleSidenav(!sidenav));
  };
  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/",
    },
    {
      text: "FAQs",
      link: "/",
    },
  ];
  return (
    <>
      <header className="md:px-10 px-4 bg-transparent bg-black border-b border-bgray">
        <section className="w-full flex items-center gap-32 py-3">
          <section className="hidden w-full md:block">
            <input
              type="text"
              name="search"
              className="w-full bg-transparent py-3 px-4 rounded-xl border border-bgray text-swhite text-sm font-medium outline-none"
              placeholder="What are looking for?"
              autoComplete="off"
            />
          </section>
          <section className="flex items-center gap-6">
            <section className="text-swhite text-xl cursor-pointer">
              <BsBell />
            </section>
            <section className="text-swhite text-xl cursor-pointer">
              <TfiHelpAlt />
            </section>
            <section className="text-swhite">
              <section className="w-[40px] h-[40px] rounded-full">
                <img className="w-full rounded-full" src={avatar} alt={avatar} />
              </section>
            </section>
          </section>
        </section>
      </header>
    </>
  );
};

export default TopBar;
