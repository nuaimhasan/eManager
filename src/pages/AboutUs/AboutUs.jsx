export default function AboutUs() {
  window.scroll(0, 0);
  return (
    <section className="py-10 lg:py-20" id="about-us">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="section_text">About Us</h3>
            <h2 className="text-2xl text-neutral">
              Empowering Efficiency, Unleashing <br /> Potential:{" "}
              <span className="text-secondary">
                Bridging Digital Success with eManager
              </span>
            </h2>

            <div className="mt-3 text-neutral-content text-[14.5px] flex flex-col gap-1">
              <p>
                eManager is a leading digital solutions company, specializing in
                website and app development, software development, and total
                digital marketing strategies. We are committed to helping
                businesses establish a strong online presence and achieve their
                digital goals.
              </p>

              <p>
                Our team of skilled professionals excels in creating visually
                appealing and user-friendly websites, as well as developing
                robust mobile applications. We leverage the latest technologies
                and industry best practices to deliver high-quality, customized
                solutions.
              </p>
              <p>
                In addition to development services, our expertise extends to
                software solutions that streamline business operations and drive
                productivity. From CRM systems to enterprise applications, we
                provide tailored software solutions to meet specific business
                needs.
              </p>
              <p>
                eManager&apos;s comprehensive digital marketing strategies
                encompass various aspects such as search engine optimization
                (SEO), social media marketing, content creation, and paid
                advertising. Our data-driven approach ensures increased brand
                visibility, audience engagement, and conversions.
              </p>
              <p>
                At eManager, we prioritize client satisfaction through open
                communication, collaboration, and timely project delivery.
                Partner with us to harness the power of technology and elevate
                your business in the digital landscape. Let eManager be your
                trusted digital solutions partner for success.
              </p>
            </div>

            <div className="mt-8">
              <button className="gradient-primary-btn">Company Profile</button>
            </div>
          </div>

          <div>
            <img
              src="/images/about2.png"
              alt=""
              className="h-80 sm:h-[450px] lg:h-[500px] w-full lg:w-[85%] ml-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
