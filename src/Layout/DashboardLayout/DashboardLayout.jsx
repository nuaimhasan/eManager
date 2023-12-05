import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar/DashboardSidebar";

export default function DashboardLayout() {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".admin_sidebar") &&
          !e.target.closest(".admin_sidebar_btn")) ||
        e.target.closest(".admin_siderbar ul li a")
      ) {
        setSidebar(false);
      }
    });
  }, []);
  return (
    <section className="flex">
      <aside className={`admin_sidebar ${sidebar && "admin_sidebar_show"}`}>
        <DashboardSidebar />
      </aside>
      <div className="admin_content">
        <DashboardHeader setSidebar={setSidebar} />
        <main className="sm:p-5 py-5">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
