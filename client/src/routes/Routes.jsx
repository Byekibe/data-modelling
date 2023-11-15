import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "../pages/homePage.jsx";
import StudentsPage from "../pages/studentsPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "students",
    element: <StudentsPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
]);

export default router;
