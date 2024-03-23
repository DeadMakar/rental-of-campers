import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Suspense } from "react";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const showHeader = !isHomePage;

  return (
    <>
      {showHeader && <Header />}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
