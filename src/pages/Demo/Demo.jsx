import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Demo() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [tab, setTab] = useState(1);

  return (
    <section className="py-5">
      <div className="container">
        {/* Tab btn */}
        <div className="grid grid-cols-2 bg-gray-300 rounded overflow-hidden">
          <button
            className={`py-2 border-r border-gray-500 duration-300  ${
              tab === 1 ? "bg-primary text-base-100" : "hover:text-primary"
            }`}
            onClick={() => setTab(1)}
          >
            MERN Stack
          </button>
          <button
            className={`py-2 duration-300 ${
              tab === 2 ? "bg-primary text-base-100" : "hover:text-primary"
            }`}
            onClick={() => setTab(2)}
          >
            PHP-Laravel
          </button>
        </div>

        <div className="mt-5">
          {tab === 1 && (
            <>
              <div>
                <h2 className="text-xl text-neutral/80">Ecommerce Website</h2>
                <div className="lg:mx-12 mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6">
                  <div className="demo_card rounded overflow-hidden bg-base-100 shadow">
                    <Link to="https://ecommerce.emanagerit.com" target="_blank">
                      <img
                        src="/images/demos/eco1.png"
                        alt=""
                        className="w-full h-52 sm:h-[250px]"
                      />
                    </Link>
                    <div className="p-3">
                      <Link
                        to="https://ecommerce.emanagerit.com"
                        target="_blank"
                      >
                        <h2>Mega Store 1 - Ecommerce Website</h2>
                      </Link>
                      <p className="text-neutral-content text-sm">
                        Reactjs, Nodejs, Expressjs, MongoDB
                      </p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="https://ecommerce.emanagerit.com"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Live Demo
                        </Link>
                        <Link
                          to="https://api.whatsapp.com/send?phone=8801906198022"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />

              <div>
                <h2 className="text-xl text-neutral/80">News Website</h2>
                <div className="lg:mx-12 mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6">
                  <div className="demo_card rounded overflow-hidden bg-base-100 shadow">
                    <Link to="https://news.emanagerit.com" target="_blank">
                      <img
                        src="/images/demos/news1.png"
                        alt=""
                        className="w-full h-52 sm:h-[250px]"
                      />
                    </Link>
                    <div className="p-3">
                      <Link to="https://news.emanagerit.com" target="_blank">
                        <h2>News Website</h2>
                      </Link>
                      <p className="text-neutral-content text-sm">
                        Reactjs, Nodejs, Expressjs, MongoDB
                      </p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="https://news.emanagerit.com"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Live Demo
                        </Link>
                        <Link
                          to="https://api.whatsapp.com/send?phone=8801906198022"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />

              <div>
                <h2 className="text-xl text-neutral/80">Business Website</h2>
                <div className="lg:mx-12 mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6">
                  <div className="demo_card rounded overflow-hidden bg-base-100 shadow">
                    <Link to="https://business2.emanagerit.com" target="_blank">
                      <img
                        src="/images/demos/bus3.png"
                        alt=""
                        className="w-full h-52 sm:h-[250px]"
                      />
                    </Link>
                    <div className="p-3">
                      <Link
                        to="https://business2.emanagerit.com"
                        target="_blank"
                      >
                        <h2>Business Portfolio 1 - Business Website</h2>
                      </Link>
                      <p className="text-neutral-content text-sm">
                        Reactjs, Nodejs, Expressjs, MongoDB
                      </p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="https://business2.emanagerit.com"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Live Demo
                        </Link>
                        <Link
                          to="https://api.whatsapp.com/send?phone=8801906198022"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="demo_card rounded overflow-hidden bg-base-100 shadow">
                    <Link to="https://business.emanagerit.com" target="_blank">
                      <img
                        src="/images/demos/bus1.png"
                        alt=""
                        className="w-full h-52 sm:h-[250px]"
                      />
                    </Link>
                    <div className="p-3">
                      <Link
                        to="https://business.emanagerit.com"
                        target="_blank"
                      >
                        <h2>Business Portfolio 2 - Business Website</h2>
                      </Link>
                      <p className="text-neutral-content text-sm">
                        Reactjs, Nodejs, Expressjs, MongoDB
                      </p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="https://business.emanagerit.com"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Live Demo
                        </Link>
                        <Link
                          to="https://api.whatsapp.com/send?phone=8801906198022"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="demo_card rounded overflow-hidden bg-base-100 shadow">
                    <Link
                      to="https://extremenetbd.emanagerit.com/"
                      target="_blank"
                    >
                      <img
                        src="/images/demos/bus2.png"
                        alt=""
                        className="w-full h-52 sm:h-[250px]"
                      />
                    </Link>
                    <div className="p-3">
                      <Link
                        to="https://extremenetbd.emanagerit.com"
                        target="_blank"
                      >
                        <h2>Business Portfolio 3 - Business Website</h2>
                      </Link>
                      <p className="text-neutral-content text-sm">
                        Reactjs, Nodejs, Expressjs, MongoDB
                      </p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="https://extremenetbd.emanagerit.com"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Live Demo
                        </Link>
                        <Link
                          to="https://api.whatsapp.com/send?phone=8801906198022"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />

              <div>
                <h2 className="text-xl text-neutral/80">Landing Page</h2>
                <div className="lg:mx-12 mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6">
                  <div className="demo_card rounded overflow-hidden bg-base-100 shadow">
                    <Link
                      to="https://magicalhairoil.emanagerit.com"
                      target="_blank"
                    >
                      <img
                        src="/images/demos/lan1.png"
                        alt=""
                        className="w-full h-52 sm:h-[250px]"
                      />
                    </Link>
                    <div className="p-3">
                      <Link
                        to="https://magicalhairoil.emanagerit.com"
                        target="_blank"
                      >
                        <h2>Magical Hair Oil - Landing Page</h2>
                      </Link>
                      <p className="text-neutral-content text-sm">
                        Reactjs, Nodejs, Expressjs, Mysql
                      </p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="https://magicalhairoil.emanagerit.com"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Live Demo
                        </Link>
                        <Link
                          to="https://api.whatsapp.com/send?phone=8801906198022"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {tab === 2 && (
            <>
              <div>
                <h2 className="text-xl text-neutral/80">Ecommerce Website</h2>
                <div className="lg:mx-12 mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6">
                  <div className="demo_card rounded overflow-hidden bg-base-100 shadow">
                    <Link to="https://ecommerce.paglabd.com/" target="_blank">
                      <img
                        src="/images/demos/ecom2.png"
                        alt=""
                        className="w-full h-52 sm:h-[250px]"
                      />
                    </Link>
                    <div className="p-3">
                      <Link to="https://ecommerce.paglabd.com/" target="_blank">
                        <h2>Single Vendor 1 - Ecommerce Website</h2>
                      </Link>
                      <p className="text-neutral-content text-sm">
                        PHP, Laravel, Bootstrap, Mysql
                      </p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="https://ecommerce.paglabd.com/"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Live Demo
                        </Link>
                        <Link
                          to="https://api.whatsapp.com/send?phone=8801906198022"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="demo_card rounded overflow-hidden bg-base-100 shadow">
                    <Link
                      to="https://multiplevendor.paglabd.com"
                      target="_blank"
                    >
                      <img
                        src="/images/demos/ecom3.png"
                        alt=""
                        className="w-full h-52 sm:h-[250px]"
                      />
                    </Link>
                    <div className="p-3">
                      <Link
                        to="https://multiplevendor.paglabd.com"
                        target="_blank"
                      >
                        <h2>Multivendor - Ecommerce Website</h2>
                      </Link>
                      <p className="text-neutral-content text-sm">
                        PHP, Laravel, Bootstrap, Mysql
                      </p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="https://multiplevendor.paglabd.com"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Live Demo
                        </Link>
                        <Link
                          to="https://api.whatsapp.com/send?phone=8801906198022"
                          target="_blank"
                          className="text-sm px-4 py-1.5 rounded bg-primary text-base-100"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
