import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Suspense } from "react";
import { Container } from "../../styles/GlobalStyles";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const showHeader = !isHomePage;

  return (
    <>
      {showHeader && <Header />}
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
