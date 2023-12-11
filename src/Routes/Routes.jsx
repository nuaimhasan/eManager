import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import Career from "../pages/Career/Career";
import CareerDetails from "../pages/CareerDetails/CareerDetails";
import ContactUs from "../pages/ContactUs/ContactUs";
import About from "../pages/DashboardPages/About/About";
import AddAdministrator from "../pages/DashboardPages/Administrator/AddAdministrator";
import Administrator from "../pages/DashboardPages/Administrator/Administrator";
import Banner from "../pages/DashboardPages/Banner/Banner";
import AddBlog from "../pages/DashboardPages/Blogs/AddBlog";
import BlogSection from "../pages/DashboardPages/Blogs/BlogSection";
import BlogsList from "../pages/DashboardPages/Blogs/BlogsList";
import EditBlog from "../pages/DashboardPages/Blogs/EditBlog";
import AddClient from "../pages/DashboardPages/Clients/AddClient";
import Clients from "../pages/DashboardPages/Clients/Clients";
import Contact from "../pages/DashboardPages/Contact/Contact";
import CounterLists from "../pages/DashboardPages/Counter/CounterLists";
import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
import Logo from "../pages/DashboardPages/Logo/Logo";
import EditMenu from "../pages/DashboardPages/Menu/EditMenu";
import Menu from "../pages/DashboardPages/Menu/Menu";
import AddService from "../pages/DashboardPages/Services/AddService";
import EditService from "../pages/DashboardPages/Services/EditService";
import ServiceBanner from "../pages/DashboardPages/Services/ServiceBanner";
import ServiceSection from "../pages/DashboardPages/Services/ServiceSection";
import ServicesList from "../pages/DashboardPages/Services/ServicesList";
import AddNewChoose from "../pages/DashboardPages/WhyChooseLists/AddNewChoose";
import EditChoose from "../pages/DashboardPages/WhyChooseLists/EditChoose";
import WhyChooseLists from "../pages/DashboardPages/WhyChooseLists/WhyChooseLists";
import Home from "../pages/Home/Home";
import ContentResearch from "../pages/ServiceDetails/ContentResearch";
import DigitalMarketing from "../pages/ServiceDetails/DegitalMarketing";
import DomainHosting from "../pages/ServiceDetails/DomainHosting";
import EComAutomation from "../pages/ServiceDetails/EComAutomation";
import EmbeddedSystem from "../pages/ServiceDetails/EmbeddedSystem";
import GraphicsDesign from "../pages/ServiceDetails/GraphicsDesign";
import SEO from "../pages/ServiceDetails/SEO";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import TrainingProgram from "../pages/ServiceDetails/TrainingProgram";
import UIUX from "../pages/ServiceDetails/UIUX";
import Videography from "../pages/ServiceDetails/Videography";
import ServicesPage from "../pages/Services/Services";
import AddNewCounter from "../pages/DashboardPages/Counter/AddNewCounter";
import EditCounter from "../pages/DashboardPages/Counter/EditCounter";
import JobsList from "../pages/DashboardPages/Career/Jobs/JobList";
import CareerBanner from "../pages/DashboardPages/career/CareerBanner";
import AddJob from "../pages/DashboardPages/Career/Jobs/AddJob";
import EditJob from "../pages/DashboardPages/Career/Jobs/EditJob";

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
        path: "/service/:slug",
        element: <ServiceDetails />,
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
        path: "/blog/:id",
        element: <BlogDetails />,
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
        path: "/admin/services/banner",
        element: <ServiceBanner />,
      },
      {
        path: "/admin/services/section-setting",
        element: <ServiceSection />,
      },
      {
        path: "/admin/services/all-services",
        element: <ServicesList />,
      },
      {
        path: "/admin/services/add-service",
        element: <AddService />,
      },
      {
        path: "/admin/services/edit/:slug",
        element: <EditService />,
      },
      {
        path: "/admin/blogs/all-blogs",
        element: <BlogsList />,
      },
      {
        path: "/admin/blogs/blog-section-setting",
        element: <BlogSection />,
      },
      {
        path: "/admin/blogs/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/admin/blogs/edit-blog/:id",
        element: <EditBlog />,
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
      {
        path: "/admin/counter",
        element: <CounterLists />,
      },
      {
        path: "/admin/counter/add-new",
        element: <AddNewCounter />,
      },
      {
        path: "/admin/counter/edit/:id",
        element: <EditCounter />,
      },
      {
        path: "/admin/career/banner",
        element: <CareerBanner />,
      },
      {
        path: "/admin/career/jobs",
        element: <JobsList />,
      },
      {
        path: "/admin/jobs/add-job",
        element: <AddJob />,
      },
      {
        path: "/admin/jobs/edit-job/:id",
        element: <EditJob />,
      },
    ],
  },
]);
