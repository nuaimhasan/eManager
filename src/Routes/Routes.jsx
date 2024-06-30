import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "../components/Spinner/Spinner";

const MainLayout = lazy(() => import("../Layout/MainLayout"));
const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));

const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("../pages/BlogDetails/BlogDetails"));

const Career = lazy(() => import("../pages/Career/Career"));
const CareerDetails = lazy(() =>
  import("../pages/CareerDetails/CareerDetails")
);

const ServicesPage = lazy(() => import("../pages/Services/Services"));
const ServiceDetails = lazy(() =>
  import("../pages/ServiceDetails/ServiceDetails")
);

const Login = lazy(() => import("../pages/Login/Login"));

const Campaigns = lazy(() => import("../pages/Campaigns/Campaigns"));
const CampaignDetails = lazy(() =>
  import("../pages/CampaignDetails/CampaignDetails")
);

const ClientsP = lazy(() => import("../pages/Clients/Clients"));

const Hosting = lazy(() => import("../pages/Hosting/Hosting"));
const Demo = lazy(() => import("../pages/Demo/Demo"));
const PrivacyPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy")
);

const ReturnPolicy = lazy(() => import("../pages/ReturnPolicy/ReturnPolicy"));

// -----------------------------------Dashboard-------------------------------------------------------------//

const AdminRoute = lazy(() => import("../AdminRoute/AdminRoute"));

const DashboardLayout = lazy(() =>
  import("../Layout/DashboardLayout/DashboardLayout")
);

const Dashboard = lazy(() =>
  import("../pages/DashboardPages/Dashboard/Dashboard")
);

const About = lazy(() => import("../pages/DashboardPages/About/About"));

const Administrator = lazy(() =>
  import("../pages/DashboardPages/Administrator/Administrator")
);
const AddAdministrator = lazy(() =>
  import("../pages/DashboardPages/Administrator/AddAdministrator")
);

const Banner = lazy(() => import("../pages/DashboardPages/Banner/Banner"));

const AddBlog = lazy(() => import("../pages/DashboardPages/Blogs/AddBlog"));
const BlogSection = lazy(() =>
  import("../pages/DashboardPages/Blogs/BlogSection")
);
const BlogsList = lazy(() => import("../pages/DashboardPages/Blogs/BlogsList"));
const EditBlog = lazy(() => import("../pages/DashboardPages/Blogs/EditBlog"));

const Clients = lazy(() => import("../pages/DashboardPages/Clients/Clients"));
const AddClient = lazy(() =>
  import("../pages/DashboardPages/Clients/AddClient")
);

const Contact = lazy(() => import("../pages/DashboardPages/Contact/Contact"));

const Logo = lazy(() => import("../pages/DashboardPages/Logo/Logo"));

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

const WhyChooseLists = lazy(() =>
  import("../pages/DashboardPages/WhyChooseLists/WhyChooseLists")
);
const AddNewChoose = lazy(() =>
  import("../pages/DashboardPages/WhyChooseLists/AddNewChoose")
);
const EditChoose = lazy(() =>
  import("../pages/DashboardPages/WhyChooseLists/EditChoose")
);

const CounterLists = lazy(() =>
  import("../pages/DashboardPages/Counter/CounterLists")
);
const AddNewCounter = lazy(() =>
  import("../pages/DashboardPages/Counter/AddNewCounter")
);
const EditCounter = lazy(() =>
  import("../pages/DashboardPages/Counter/EditCounter")
);

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

const JobsList = lazy(() =>
  import("../pages/DashboardPages/Career/Jobs/JobList")
);
const AddJob = lazy(() => import("../pages/DashboardPages/Career/Jobs/AddJob"));
const EditJob = lazy(() =>
  import("../pages/DashboardPages/Career/Jobs/EditJob")
);

const MakePrivacyPolicy = lazy(() =>
  import("../pages/DashboardPages/MakePrivacyPolicy/MakePrivacyPolicy")
);

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
      <Suspense fallback={<Spinner />}>
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      </Suspense>
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
