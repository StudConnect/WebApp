import FollowSuggestion from "../../components/common/followSuggestion/FollowSuggestion";
import LiveEvents from "../../components/common/liveEvents/LiveEvents";
import { FaArrowLeft } from "react-icons/fa";
import { ButtonBg } from "../../components/shared/buttons/Buttons";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../../components/common/post/Post";
import { events, posts, users } from "../../utils/DummyData";

const Profile = () => {

    const navLinks = [
        {
            text: "Posts",
            link: "/profile#posts",
        },
        {
            text: "Resources",
            link: "/profile#resources",
        },
        {
            text: "Bookmarks",
            link: "/profile#bookmarks",
        },
        {
            text: "Reposts",
            link: "/profile#reposts",
        },
        {
            text: "Likes",
            link: "/profile#likes",
        },
    ];

    const location = useLocation();
    const [activeLink, setActiveLink] = useState<string>(location.pathname + location.hash);

    useEffect(() => {
        setActiveLink(location.pathname + location.hash);
    }, [location.pathname, location.hash]);

    console.log(activeLink);

    const navigate = useNavigate()

    const renderContent = () => {
        switch (activeLink) {
            case '/profile#posts':
                return (
                    <section>
                        {
                            posts.map((post, i) => (
                                <Post key={i} post={post} />))
                        }
                    </section>
                );
            case '/profile#resources':
                return <section>Resources Content</section>;
            case '/profile#bookmarks':
                return <section>Bookmarks Content</section>;
            case '/profile#reposts':
                return <section>Reposts Content</section>;
            case '/profile#likes':
                return <section>Likes Content</section>;
            default:
                return <section>Select a tab to view content</section>;
        }
    }

    return (
        <section className="w-full h-[89vh] md:px-10 px-4 py-2 md:flex md:gap-10">
            <section className="h-full w-full md:w-2/3 overflow-y-scroll lg:px-5">
                <section className="flex text-swhite items-center py-3 gap-10">
                    <section className="cursor-pointer">
                        <FaArrowLeft onClick={() => navigate(-1)} />
                    </section>
                    <section className="leading-3">
                        <h3 className="text-lg font-semibold">David Horjet 🏂</h3>
                        <span className="text-swhite2 text-xs">2,500 posts</span>
                    </section>
                </section>
                <section className="">
                    <section className="w-full relative">
                        <img
                            className="w-full"
                            src="https://pbs.twimg.com/profile_banners/1487499171644981253/1717090532/600x200"
                            alt=""
                        />
                        <section className="absolute -bottom-9 left-5 w-20 ">
                            <img
                                className="w-full rounded-full"
                                src="https://pbs.twimg.com/profile_images/1810060418888372224/VQ29FGgX_400x400.jpg"
                                alt=""
                            />
                        </section>
                    </section>
                    <section className="bg-black py-5">
                        <section className="w-full flex justify-end">
                            <section className="w-fit justify-end">
                                <ButtonBg onClick={() => navigate("/settings/account")} className="py-2 px-3">Edit profile</ButtonBg>
                            </section>
                        </section>
                        <section className="mb-3">
                            <h3 className="text-lg text-swhite font-semibold">David Horjet 🏂</h3>
                            <span className="text-swhite2 text-sm">@davidhorjet</span>
                        </section>
                        <section className="mb-4">
                            <p className="text-white text-sm">
                                Software Developer || Frontend || Backend || NodeJs || ReactJs || Eye Doctor in 👀
                            </p>
                        </section>
                        <section className="flex items-center gap-5">
                            <section className="flex items-center gap-1">
                                <span className="text-sm text-swhite font-semibold">134</span>
                                <span className="text-swhite2 text-sm">following</span>
                            </section>
                            <section className="flex items-center gap-1">
                                <span className="text-sm text-swhite font-semibold">37k</span>
                                <span className="text-swhite2 text-sm">followers</span>
                            </section>
                        </section>
                    </section>
                    <section className="w-full border-b border-b-para py-3">
                        <ul className="flex flex-row justify-between items-center">
                            {navLinks.map((navLink, index) => (
                                <li key={index}>
                                    <RouterLink
                                        className={`${activeLink === navLink.link ? "text-bc" : "text-swhite2"
                                            } text-base font-medium transition-all hover:text-bc hover:transition duration-300`}
                                        to={navLink.link}
                                        onClick={() => setActiveLink(navLink.link)}
                                    >
                                        {navLink.text}
                                    </RouterLink>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
                <section className="mt-5">
                    {renderContent()}
                </section>
            </section>
            <section className="w-full hidden md:w-1/3 h-full overflow-y-scroll gap-10 md:flex flex-col">
                <LiveEvents events={events} />
                <FollowSuggestion users={users} />
            </section>
        </section>
    );
};

export default Profile;
