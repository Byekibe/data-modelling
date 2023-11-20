import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "../pages/homePage.jsx";
import StudentsPage from "../pages/studentsPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import GradedStudents from "../pages/gradedStudents.jsx";
import GradedRankedPage from "../pages/gradedRankedPage.jsx";
import About from "../pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "students",
    element: <StudentsPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },

  {
    path: "graded",
    element: <GradedStudents />,
  },

  {
    path: "graded/ranked",
    element: <GradedRankedPage />,
  },
]);

export default router;
