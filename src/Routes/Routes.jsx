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
]);
