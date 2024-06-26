import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useGetClientsQuery } from "../../redux/api/clientApi";

export default function ClientsP() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data, isLoading } = useGetClientsQuery();
  const clients = data?.data;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="py-10 flex justify-center items-center">
        <h2 className="text-primary text-4xl font-semibold">Our Clients</h2>
      </div>
      <div className="container">
        <div className="grid grid-cols-5 gap-6">
          {clients?.map((client) => (
            <div
              key={client?._id}
              className="w-full h-20 flex justify-center items-center"
            >
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/clients/${
                  client?.image
                }`}
                alt=""
                className="w-[80%] h-[65%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
