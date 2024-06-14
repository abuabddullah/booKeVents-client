import { createBrowserRouter } from "react-router-dom";
import BookNow from "../components/maniLayout/BookNow";
import EventDetails from "../components/maniLayout/EventDetails";
import MyEvents from "../components/maniLayout/MyEvents";
import Payment from "../components/maniLayout/Payment";
import Success from "../components/maniLayout/Success";
import ProtectedRoute from "../components/shared/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/mainLayoutPage/Home";
import Login from "../pages/mainLayoutPage/Login";
import ErrorPage from "../pages/shared/ErrorPage;";

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
        loader: ({ params }) =>
          fetch(`https://bookevents-server.onrender.com/api/v1/events/${params.id}`),
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-events",
        element: (
          <ProtectedRoute>
            <MyEvents />
          </ProtectedRoute>
        ),
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
    path: "/success/:id/:email",
    element: <Success />,
    errorElement: <ErrorPage />,
  },
]);
