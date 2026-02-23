import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Membership from "./pages/Membership";
import Trainers from "./pages/Trainers";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";   // 👈 ADD THIS

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "membership", Component: Membership },
      { path: "trainers", Component: Trainers },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },

      // 👇 ADD THIS
      { path: "admin", Component: Admin },
    ],
  },
]);