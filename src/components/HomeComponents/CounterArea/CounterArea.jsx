export default function CounterArea() {
  return (
    <div className="-mt-10 md:mt-0 lg:-mt-10">
      <div className="container lg:w-3/5 mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 p-6 rounded-xl bg-[#fff9ec7c] backdrop-blur-[10px] text-center">
          <div className="py-4 sm:border-r border-b sm:border-b-0">
            <h2 className="text-2xl text-secondary font-semibold mb-1">70+</h2>
            <p className="text-[15px] text-neutral-content">Successful Years</p>
          </div>
          <div className="py-4 md:border-r border-b sm:border-b-0">
            <h2 className="text-2xl text-secondary font-semibold mb-1">
              2500+
            </h2>
            <p className="text-[15px] text-neutral-content">Project Done</p>
          </div>
          <div className="py-4 sm:border-r border-b sm:border-b-0">
            <h2 className="text-2xl text-secondary font-semibold mb-1">500+</h2>
            <p className="text-[15px] text-neutral-content">Happy Clients</p>
          </div>
          <div className="py-4">
            <h2 className="text-2xl text-secondary font-semibold mb-1">99%</h2>
            <p className="text-[15px] text-neutral-content">
              Positive Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
