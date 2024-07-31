import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = () => {
  return (
    <div className="bg-night min-h-screen relative bg-home-overlay bg-no-repeat bg-top">
      <Header />
      <main className="content-wrapper relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
