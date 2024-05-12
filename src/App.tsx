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

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Feed />} />
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
