import { useState } from "react";
import { useGetAllCounterQuery } from "../../../redux/api/CounterApi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function CounterArea() {
  const [count, setCount] = useState(false);
  const { data } = useGetAllCounterQuery();
  const counters = data?.data;

  return (
    <section className="py-10 bg-primary text-base-100">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {counters?.map((counter) => (
            <div key={counter?.id} className="counter_card" data-aos="zoom-in">
              <div className="icon">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/counter/${
                    counter?.icon
                  }`}
                  alt="icon"
                />
              </div>
              <ScrollTrigger
                onEnter={() => setCount(true)}
                onExit={() => setCount(false)}
              >
                {count && (
                  <h1 className="text-xl sm:text-2xl">
                    {counter?.title.includes("+") ? (
                      <>
                        <CountUp
                          start={0}
                          end={counter?.title?.split("+")[0]}
                        />
                        +
                      </>
                    ) : counter?.title.includes("%") ? (
                      <>
                        <CountUp
                          start={0}
                          end={counter?.title?.split("%")[0]}
                        />
                        %
                      </>
                    ) : (
                      counter?.title
                    )}
                  </h1>
                )}
              </ScrollTrigger>
              <h2 className="text-sm sm:text-base">{counter?.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
