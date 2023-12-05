import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import WebDevelopment from "../pages/ServiceDetails/webDevelopment";
import AddDevelopment from "../pages/ServiceDetails/AppDevelopment";
import UIUX from "../pages/ServiceDetails/UIUX";
import EmbeddedSystem from "../pages/ServiceDetails/EmbeddedSystem";
import DigitalMarketing from "../pages/ServiceDetails/DegitalMarketing";
import SEO from "../pages/ServiceDetails/SEO";
import GraphicsDesign from "../pages/ServiceDetails/GraphicsDesign";
import Videography from "../pages/ServiceDetails/Videography";
import ContentResearch from "../pages/ServiceDetails/ContentResearch";
import EComAutomation from "../pages/ServiceDetails/EComAutomation";
import TrainingProgram from "../pages/ServiceDetails/TrainingProgram";
import DomainHosting from "../pages/ServiceDetails/DomainHosting";
import ServicesPage from "../pages/Services/Services";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Blogs from "../pages/Blogs/Blogs";
import Career from "../pages/Career/Career";
import CareerDetails from "../pages/CareerDetails/CareerDetails";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
import Logo from "../pages/DashboardPages/Logo/Logo";
import About from "../pages/DashboardPages/About/About";
import Contact from "../pages/DashboardPages/Contact/Contact";
import Banner from "../pages/DashboardPages/Banner/Banner";
import Administrator from "../pages/DashboardPages/Administrator/Administrator";
import AddAdministrator from "../pages/DashboardPages/Administrator/AddAdministrator";
import Clients from "../pages/DashboardPages/Clients/Clients";
import AddClient from "../pages/DashboardPages/Clients/AddClient";
import WhyChooseLists from "../pages/DashboardPages/WhyChooseLists/WhyChooseLists";
import AddNewChoose from "../pages/DashboardPages/WhyChooseLists/AddNewChoose";
import EditChoose from "../pages/DashboardPages/WhyChooseLists/EditChoose";
import Menu from "../pages/DashboardPages/Menu/Menu";
import EditMenu from "../pages/DashboardPages/Menu/EditMenu";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/career/:id",
        element: <CareerDetails />,
      },
      {
        path: "/service/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "/service/app-development",
        element: <AddDevelopment />,
      },
      {
        path: "/service/ui-ux-design",
        element: <UIUX />,
      },
      {
        path: "/service/embedded-system",
        element: <EmbeddedSystem />,
      },
      {
        path: "/service/digital-marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/service/seo",
        element: <SEO />,
      },
      {
        path: "/service/graphics-design",
        element: <GraphicsDesign />,
      },
      {
        path: "/service/videography",
        element: <Videography />,
      },
      {
        path: "/service/content-research",
        element: <ContentResearch />,
      },
      {
        path: "/service/eCom-automation",
        element: <EComAutomation />,
      },
      {
        path: "/service/training-programn",
        element: <TrainingProgram />,
      },
      {
        path: "/service/domain-hosting",
        element: <DomainHosting />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/front-end/logo",
        element: <Logo />,
      },
      {
        path: "/admin/front-end/about-us",
        element: <About />,
      },
      {
        path: "/admin/front-end/contact-us",
        element: <Contact />,
      },
      {
        path: "/admin/front-end/banner",
        element: <Banner />,
      },
      {
        path: "/admin/clients/all-clients",
        element: <Clients />,
      },
      {
        path: "/admin/clients/add-client",
        element: <AddClient />,
      },
      {
        path: "/admin/why-choose",
        element: <WhyChooseLists />,
      },
      {
        path: "/admin/why-choose/add-new",
        element: <AddNewChoose />,
      },
      {
        path: "/admin/why-choose/edit/:id",
        element: <EditChoose />,
      },
      {
        path: "/admin/administrator/all-administrator",
        element: <Administrator />,
      },
      {
        path: "/admin/administrator/add-administrator",
        element: <AddAdministrator />,
      },
      {
        path: "/admin/front-end/menu",
        element: <Menu />,
      },
      {
        path: "/admin/front-end/menu/edit/:id",
        element: <EditMenu />,
      },
    ],
  },
]);
