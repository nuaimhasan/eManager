import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TopHeader from "../components/TopHeader/TopHeader";
import { Suspense } from "react";
import Spinner from "../components/Spinner/Spinner";

export default function MainLayout() {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="min-h-[80vh]">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
