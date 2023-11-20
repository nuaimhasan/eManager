import { LuBrainCircuit, LuSettings, LuTimer } from "react-icons/lu";
import { BiHappy } from "react-icons/bi";

export default function WhyChooseUs() {
  return (
    <section className="py-10 lg:py-20 bg-secondary text-base-100">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-medium">Why Choose Us</h2>
          <p className="opacity-90 font-light lg:w-1/2 mx-auto text-sm mt-1.5">
            eManager is here to fuel your success with our expertise in website,
            app, software development, and total digital marketing solutions.
            Let&apos;s embark on a journey of growth together!
          </p>
        </div>

        <div className="mt-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="flex justify-center text-4xl ">
                <LuBrainCircuit />
              </p>
              <h2 className="text-xl font-medium my-2">Expertise</h2>
              <p className="text-sm opacity-80 font-light">
                Our team consists of skilled professionals with extensive
                experience in their respective fields, ensuring top-notch
                quality and innovation in our solutions.
              </p>
            </div>

            <div className="text-center">
              <p className="flex justify-center text-4xl ">
                <LuSettings />
              </p>
              <h2 className="text-xl font-medium my-2">Customization</h2>
              <p className="text-sm opacity-80 font-light">
                We understand that every business has unique requirements.
                Hence, we offer personalized solutions that align with your
                specific goals and objectives.
              </p>
            </div>

            <div className="text-center">
              <p className="flex justify-center text-4xl ">
                <LuTimer />
              </p>
              <h2 className="text-xl font-medium my-2">Timely Delivery</h2>
              <p className="text-sm opacity-80 font-light">
                We value time and strive to complete projects within the
                agreed-upon timelines, ensuring prompt delivery without
                compromising on quality.
              </p>
            </div>

            <div className="text-center">
              <p className="flex justify-center text-4xl ">
                <BiHappy />
              </p>
              <h2 className="text-xl font-medium my-2">
                Customer Satisfaction
              </h2>
              <p className="text-sm opacity-80 font-light">
                We prioritize customer satisfaction and provide ongoing support
                to our clients, ensuring their success in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
