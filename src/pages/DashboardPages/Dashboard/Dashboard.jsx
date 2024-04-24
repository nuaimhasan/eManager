import { MdMedicalServices, MdHomeRepairService } from "react-icons/md";
import { FaUserShield, FaUsers, FaBlogger } from "react-icons/fa";
import { SiMicrosoftteams } from "react-icons/si";
import { useGetAllServicesQuery } from "../../../redux/api/serviceApi";
import { useGetAdminsQuery } from "../../../redux/api/administratorApi";
import { useGetClientsQuery } from "../../../redux/api/clientApi";
import { useGetAllteamsQuery } from "../../../redux/api/teamApi";
import { useGetBlogsQuery } from "../../../redux/api/blogApi";
import { useGetJobsQuery } from "../../../redux/api/jobsApi";

export default function Dashboard() {
  const { data: services } = useGetAllServicesQuery();
  const { data: admins } = useGetAdminsQuery();
  const { data: clients } = useGetClientsQuery();
  const { data: teams } = useGetAllteamsQuery();
  const { data: blogs } = useGetBlogsQuery();
  const { data: jobs } = useGetJobsQuery();
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg">Total Services</h3>
            </div>
            <div>
              <MdMedicalServices className="text-2xl text-neutral-content" />
            </div>
          </div>

          <p>{services?.data?.length}</p>
        </div>

        <div className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg">Total Admin</h3>
            </div>
            <div>
              <FaUserShield className="text-2xl text-neutral-content" />
            </div>
          </div>

          <p>{admins?.data?.length}</p>
        </div>

        <div className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg">Total Clints</h3>
            </div>
            <div>
              <FaUsers className="text-2xl text-neutral-content" />
            </div>
          </div>

          <p>{clients?.data?.length}</p>
        </div>

        <div className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg">Total Team</h3>
            </div>
            <div>
              <SiMicrosoftteams className="text-2xl text-neutral-content" />
            </div>
          </div>

          <p>{teams?.data?.length}</p>
        </div>

        <div className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg">Total Blogs</h3>
            </div>
            <div>
              <FaBlogger className="text-2xl text-neutral-content" />
            </div>
          </div>

          <p>{blogs?.data?.length}</p>
        </div>

        <div className="shadow rounded p-4 bg-base-100">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg">Total Posted Job</h3>
            </div>
            <div>
              <MdHomeRepairService className="text-2xl text-neutral-content" />
            </div>
          </div>

          <p>{jobs?.data?.length}</p>
        </div>
      </div>
    </div>
  );
}
