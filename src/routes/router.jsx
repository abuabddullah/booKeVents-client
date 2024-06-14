import { createBrowserRouter } from "react-router-dom";
import BookNow from "../components/maniLayout/BookNow";
import EventDetails from "../components/maniLayout/EventDetails";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/mainLayoutPage/Home";
import Login from "../pages/mainLayoutPage/Login";
import ErrorPage from "../pages/shared/ErrorPage;";
import Payment from "../components/maniLayout/Payment";
import MyEvents from "../components/maniLayout/MyEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/eventDetails/:id",
        element: <EventDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-events",
        element: <MyEvents />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/bookNow",
        element: <BookNow />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/payment/:id",
        element: <Payment />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
    ],
  },

  {
    path: "/register",
    // element: <Register />,
    // errorElement: <ErrorPage />,
  },
]);
