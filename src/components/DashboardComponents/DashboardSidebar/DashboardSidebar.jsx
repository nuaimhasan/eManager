import { Link } from "react-router-dom";
import { MdOutlineDashboard, MdMonitor } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import SidebarItems from "./SidebarItems";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },
  {
    icon: <BsCart4 />,
    title: "Services",
    subMenu: [
      {
        title: "Add Service",
        path: "/admin/services/add-service",
      },
      {
        title: "All Services",
        path: "/admin/services/all-services",
      },
      {
        title: "Service Banner Setting",
        path: "/admin/services/banner",
      },
      {
        title: "Service Section Setting",
        path: "/admin/services/section-setting",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Blogs",
    subMenu: [
      {
        title: "All Blogs",
        path: "/admin/blogs/all-blogs",
      },
      {
        title: "Blog Section Setting",
        path: "/admin/blogs/blog-section-setting",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Clients",
    subMenu: [
      {
        title: "All Clients",
        path: "/admin/clients/all-clients",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Why Choose",
    subMenu: [
      {
        title: "Why Choose Lists",
        path: "/admin/why-choose",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Counter Area",
    subMenu: [
      {
        title: "Counter Area Lists",
        path: "/admin/counter",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Career",
    subMenu: [
      {
        title: "Career Banner Setting",
        path: "/admin/administrator/all-administrator",
      },
      {
        title: "Career Beneits Setting",
        path: "/admin/administrator/all-administrator",
      },
      {
        title: "Jobs",
        path: "/admin/administrator/all-administrator",
      },
      {
        title: "Applicants List",
        path: "/admin/administrator/all-administrator",
      },
    ],
  },
  {
    icon: <RiAdminFill />,
    title: "Administrator",
    subMenu: [
      {
        title: "All Administrator",
        path: "/admin/administrator/all-administrator",
      },
    ],
  },
  {
    icon: <MdMonitor />,
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/front-end/logo",
      },
      {
        title: "Menu",
        path: "/admin/front-end/menu",
      },
      {
        title: "Banner",
        path: "/admin/front-end/banner",
      },
      {
        title: "About Us",
        path: "/admin/front-end/about-us",
      },
      {
        title: "Contact Us",
        path: "/admin/front-end/contact-us",
      },
    ],
  },
];

export default function DashboardSidebar() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <nav className="admin_siderbar">
          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>

      <div className="bg-[#445360] p-2 flex justify-between items-center font-light">
        <p>Visit Front-End</p>
        <Link to="/" target="_blank" className="text-primary hover:underline">
          eManager
        </Link>
      </div>
    </div>
  );
}
