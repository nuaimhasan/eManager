import { useGetAllCounterQuery } from "../../../redux/api/CounterApi";

export default function CounterArea() {
  const { data } = useGetAllCounterQuery();

  const counters = data?.data;

  return (
    <section className="py-10 bg-secondary text-base-100">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {counters?.map((counter) => (
            <div key={counter?.id} className="counter_card">
              <div className="icon">
                <img
                  src={`http://localhost:5000/counter/${counter?.icon}`}
                  alt="icon"
                  className="w-10"
                />
              </div>
              <h1>{counter?.title}</h1>
              <h2>{counter?.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
