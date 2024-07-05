import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashNavs from "../components/maniLayout/DashNavs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const MainLayout = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <LoadingSpinner />;
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full">
            <div className="flex justify-end lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            {/*  */}
          </div>
          {/* Page content here */}
          <div className="md:p-6">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <div>
              <Link to="/">
                <span className="ml-3"><span className="text-black-400 text-3xl font-bold">Boo</span> <span className="text-rose-500 font-semibold text-xl">Ke</span> <span className="text-black-400 text-3xl font-bold">Vents</span></span>
              </Link>
            </div>
            <DashNavs />
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
