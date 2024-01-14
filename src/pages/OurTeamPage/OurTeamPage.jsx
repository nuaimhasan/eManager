import Spinner from "../../components/Spinner/Spinner";
import { useGetAllteamsQuery } from "../../redux/api/teamApi";

export default function OurTeamPage() {
  window.scroll(0, 0);
  const { data, isLoading } = useGetAllteamsQuery();
  if (isLoading) return <Spinner />;

  return (
    <section className="py-4 sm:py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            Meet Our Team
          </h2>
        </div>
        <div className="lg:mx-40 mt-7 flex flex-col gap-5 team_page">
          {data?.data?.map((team) => (
            <div
              key={team?._id}
              className="sm:flex gap-4 items-center shadow-lg bg-base-100 rounded p-4 border team_full_card"
            >
              <div className="sm:w-1/3">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/team/${
                    team?.image
                  }`}
                  alt="team-image"
                  className="md:w-[90%] h-40 md:h-52 rounded"
                />
              </div>
              <div className="sm:w-2/3">
                <h2 className="text-2xl font-medium text-secondary">
                  {team?.name}
                </h2>
                <p className="text-neutral-content font-medium">
                  {team?.designation}
                </p>
                <p className="text-neutral-content text-sm min-h-[120px]"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
