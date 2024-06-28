import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// import MainLayout from "../Layout/MainLayout";
const MainLayout = lazy(() => import("../Layout/MainLayout"));

// import AboutUs from "../pages/AboutUs/AboutUs";
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));

// import ContactUs from "../pages/ContactUs/ContactUs";
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));

// import Blogs from "../pages/Blogs/Blogs";
// import BlogDetails from "../pages/BlogDetails/BlogDetails";
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("../pages/BlogDetails/BlogDetails"));

// import Career from "../pages/Career/Career";
// import CareerDetails from "../pages/CareerDetails/CareerDetails";
const Career = lazy(() => import("../pages/Career/Career"));
const CareerDetails = lazy(() =>
  import("../pages/CareerDetails/CareerDetails")
);

// import Home from "../pages/Home/Home";
const Home = lazy(() => import("../pages/Home/Home"));

// import ServicesPage from "../pages/Services/Services";
// import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
const ServicesPage = lazy(() => import("../pages/Services/Services"));
const ServiceDetails = lazy(() =>
  import("../pages/ServiceDetails/ServiceDetails")
);

// import Login from "../pages/Login/Login";
const Login = lazy(() => import("../pages/Login/Login"));

// import OurTeamPage from "../pages/OurTeamPage/OurTeamPage";

// import Campaigns from "../pages/Campaigns/Campaigns";
// import CampaignDetails from "../pages/CampaignDetails/CampaignDetails";
const Campaigns = lazy(() => import("../pages/Campaigns/Campaigns"));
const CampaignDetails = lazy(() =>
  import("../pages/CampaignDetails/CampaignDetails")
);

// import Clients from "../pages/Clients/Clients";
const ClientsP = lazy(() => import("../pages/Clients/Clients"));

// import Hosting from "../pages/Hosting/Hosting";
const Hosting = lazy(() => import("../pages/Hosting/Hosting"));

// import Demo from "../pages/Demo/Demo";
const Demo = lazy(() => import("../pages/Demo/Demo"));

// import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
const PrivacyPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy")
);

// import ReturnPolicy from "../pages/ReturnPolicy/ReturnPolicy";
const ReturnPolicy = lazy(() => import("../pages/ReturnPolicy/ReturnPolicy"));

// -----------------------------------Dashboard-------------------------------------------------------------//
// import AdminRoute from "../AdminRoute/AdminRoute";
const AdminRoute = lazy(() => import("../AdminRoute/AdminRoute"));

// import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
const DashboardLayout = lazy(() =>
  import("../Layout/DashboardLayout/DashboardLayout")
);

// import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
const Dashboard = lazy(() =>
  import("../pages/DashboardPages/Dashboard/Dashboard")
);

// import About from "../pages/DashboardPages/About/About";
const About = lazy(() => import("../pages/DashboardPages/About/About"));

// import Administrator from "../pages/DashboardPages/Administrator/Administrator";
// import AddAdministrator from "../pages/DashboardPages/Administrator/AddAdministrator";
const Administrator = lazy(() =>
  import("../pages/DashboardPages/Administrator/Administrator")
);
const AddAdministrator = lazy(() =>
  import("../pages/DashboardPages/Administrator/AddAdministrator")
);

// import Banner from "../pages/DashboardPages/Banner/Banner";
const Banner = lazy(() => import("../pages/DashboardPages/Banner/Banner"));

// import AddBlog from "../pages/DashboardPages/Blogs/AddBlog";
// import BlogSection from "../pages/DashboardPages/Blogs/BlogSection";
// import BlogsList from "../pages/DashboardPages/Blogs/BlogsList";
// import EditBlog from "../pages/DashboardPages/Blogs/EditBlog";
const AddBlog = lazy(() => import("../pages/DashboardPages/Blogs/AddBlog"));
const BlogSection = lazy(() =>
  import("../pages/DashboardPages/Blogs/BlogSection")
);
const BlogsList = lazy(() => import("../pages/DashboardPages/Blogs/BlogsList"));
const EditBlog = lazy(() => import("../pages/DashboardPages/Blogs/EditBlog"));

// import Clients from "../pages/DashboardPages/Clients/Clients";
// import AddClient from "../pages/DashboardPages/Clients/AddClient";
const Clients = lazy(() => import("../pages/DashboardPages/Clients/Clients"));
const AddClient = lazy(() =>
  import("../pages/DashboardPages/Clients/AddClient")
);

// import Contact from "../pages/DashboardPages/Contact/Contact";
const Contact = lazy(() => import("../pages/DashboardPages/Contact/Contact"));

// import Logo from "../pages/DashboardPages/Logo/Logo";
const Logo = lazy(() => import("../pages/DashboardPages/Logo/Logo"));

// import ServiceSection from "../pages/DashboardPages/Services/ServiceSection";
// import ServiceBanner from "../pages/DashboardPages/Services/ServiceBanner";
// import ServicesList from "../pages/DashboardPages/Services/ServicesList";
// import AddService from "../pages/DashboardPages/Services/AddService";
// import EditService from "../pages/DashboardPages/Services/EditService";
const ServiceSection = lazy(() =>
  import("../pages/DashboardPages/Services/ServiceSection")
);
const ServiceBanner = lazy(() =>
  import("../pages/DashboardPages/Services/ServiceBanner")
);
const ServicesList = lazy(() =>
  import("../pages/DashboardPages/Services/ServicesList")
);
const AddService = lazy(() =>
  import("../pages/DashboardPages/Services/AddService")
);
const EditService = lazy(() =>
  import("../pages/DashboardPages/Services/EditService")
);

// import WhyChooseLists from "../pages/DashboardPages/WhyChooseLists/WhyChooseLists";
// import AddNewChoose from "../pages/DashboardPages/WhyChooseLists/AddNewChoose";
// import EditChoose from "../pages/DashboardPages/WhyChooseLists/EditChoose";
const WhyChooseLists = lazy(() =>
  import("../pages/DashboardPages/WhyChooseLists/WhyChooseLists")
);
const AddNewChoose = lazy(() =>
  import("../pages/DashboardPages/WhyChooseLists/AddNewChoose")
);
const EditChoose = lazy(() =>
  import("../pages/DashboardPages/WhyChooseLists/EditChoose")
);

// import CounterLists from "../pages/DashboardPages/Counter/CounterLists";
// import AddNewCounter from "../pages/DashboardPages/Counter/AddNewCounter";
// import EditCounter from "../pages/DashboardPages/Counter/EditCounter";
const CounterLists = lazy(() =>
  import("../pages/DashboardPages/Counter/CounterLists")
);
const AddNewCounter = lazy(() =>
  import("../pages/DashboardPages/Counter/AddNewCounter")
);
const EditCounter = lazy(() =>
  import("../pages/DashboardPages/Counter/EditCounter")
);

// import CareerBanner from "../pages/DashboardPages/Career/CareerBanner";
// import BenefitList from "../pages/DashboardPages/Career/Benefits/BenefitList";
// import AddBenefit from "../pages/DashboardPages/Career/Benefits/AddBenefit";
// import EditBenefit from "../pages/DashboardPages/Career/Benefits/EditBenefit";
// import ApplicantsList from "../pages/DashboardPages/Career/Applicants/ApplicantsList";

const CareerBanner = lazy(() =>
  import("../pages/DashboardPages/Career/CareerBanner")
);

const BenefitList = lazy(() =>
  import("../pages/DashboardPages/Career/Benefits/BenefitList")
);
const AddBenefit = lazy(() =>
  import("../pages/DashboardPages/Career/Benefits/AddBenefit")
);
const EditBenefit = lazy(() =>
  import("../pages/DashboardPages/Career/Benefits/EditBenefit")
);

const ApplicantsList = lazy(() =>
  import("../pages/DashboardPages/Career/Applicants/ApplicantsList")
);

// import JobsList from "../pages/DashboardPages/Career/Jobs/JobList";
// import AddJob from "../pages/DashboardPages/Career/Jobs/AddJob";
// import EditJob from "../pages/DashboardPages/Career/Jobs/EditJob";

const JobsList = lazy(() =>
  import("../pages/DashboardPages/Career/Jobs/JobList")
);
const AddJob = lazy(() => import("../pages/DashboardPages/Career/Jobs/AddJob"));
const EditJob = lazy(() =>
  import("../pages/DashboardPages/Career/Jobs/EditJob")
);

// import AllTeams from "../pages/DashboardPages/Teams/AllTeams";
// import AddTeamMember from "../pages/DashboardPages/Teams/AddTeamMember";
// import EditTeam from "../pages/DashboardPages/Teams/EditTeam";

// import MakePrivacyPolicy from "../pages/DashboardPages/MakePrivacyPolicy/MakePrivacyPolicy";
const MakePrivacyPolicy = lazy(() =>
  import("../pages/DashboardPages/MakePrivacyPolicy/MakePrivacyPolicy")
);

// import MakeReturnPolicy from "../pages/DashboardPages/MakeReturnPolicy/MakeReturnPolicy";
const MakeReturnPolicy = lazy(() =>
  import("../pages/DashboardPages/MakeReturnPolicy/MakeReturnPolicy")
);

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
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
      },
      {
        path: "/campaigns/:id",
        element: <CampaignDetails />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/career/:id",
        element: <CareerDetails />,
      },
      // {
      //   path: "/our-team",
      //   element: <OurTeamPage />,
      // },
      {
        path: "/clients",
        element: <ClientsP />,
      },
      {
        path: "/hosting",
        element: <Hosting />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/return-policy",
        element: <ReturnPolicy />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
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
      // {
      //   path: "/admin/teams/all-teams",
      //   element: <AllTeams />,
      // },
      // {
      //   path: "/admin/teams/add-team",
      //   element: <AddTeamMember />,
      // },
      // {
      //   path: "/admin/teams/edit-team/:id",
      //   element: <EditTeam />,
      // },
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
      {
        path: "/admin/career/benefits",
        element: <BenefitList />,
      },
      {
        path: "/admin/benefits/add-benefit",
        element: <AddBenefit />,
      },
      {
        path: "/admin/benefit/edit-benefit/:id",
        element: <EditBenefit />,
      },
      {
        path: "/admin/career/all-applicants",
        element: <ApplicantsList />,
      },

      {
        path: "/admin/privacy-policy",
        element: <MakePrivacyPolicy />,
      },
      {
        path: "/admin/return-policy",
        element: <MakeReturnPolicy />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
