import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainLayout from "./components/layouts/mainlayout/MainLayout";
import Feed from "./pages/feed/Feed";
import Search from "./pages/search/Search";
import Groups from "./pages/groups/Groups";
import Resources from "./pages/resources/Resources";
import Mentors from "./pages/mentors/Mentors";
import Events from "./pages/events/Events";
import Profile from "./pages/profile/Profile";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </>
    )
  );
  return (
    <section className="text-Plus">
      <RouterProvider router={router} />
      <ToastContainer />
    </section>
  )
}

export default App;
