import { FaTrophy, FaUsers, FaLaptop } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { BiSolidLike, BiSupport } from "react-icons/bi";

export default function CounterArea() {
  return (
    <section className="py-10 bg-secondary text-base-100">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          <div className="counter_card">
            <div className="icon">
              <FaTrophy />
            </div>
            <h1>7+</h1>
            <h2>Successful Years</h2>
          </div>
          <div className="counter_card">
            <div className="icon">
              <AiFillProject />
            </div>
            <h1>2500+</h1>
            <h2>Project Done</h2>
          </div>
          <div className="counter_card">
            <div className="icon">
              <FaLaptop />
            </div>
            <h1>1500+</h1>
            <h2>IT Professionals</h2>
          </div>
          <div className="counter_card">
            <div className="icon">
              <FaUsers />
            </div>
            <h1>500+</h1>
            <h2>Happy Clients</h2>
          </div>
          <div className="counter_card">
            <div className="icon">
              <BiSolidLike />
            </div>
            <h1>99%</h1>
            <h2>Positive Feedback</h2>
          </div>
          <div className="counter_card">
            <div className="icon">
              <BiSupport />
            </div>
            <h1>24/7</h1>
            <h2>Support</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
