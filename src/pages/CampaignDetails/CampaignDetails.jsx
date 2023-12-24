import { GiCheckMark } from "react-icons/gi";

const CampaignDetails = () => {
  return (
    <section className="py-10 lg:py-14 bg-base-100" id="services">
      <div className="py-5 min-h-[60vh]">
        <div className="w-[90%] xl:w-[1280px] mx-auto">
          <p className="text-center text-2xl font-medium mb-8">
            Campaign Checkout
          </p>

          <div className="md:flex items-start justify-center gap-10">
            <div className="lg:w-[40%] md:w-[60%] h-full mb-10 lg:mb-0">
              <div className="shadow-lg p-7">
                <p className="text-lg font-semibold text-center">
                  Billing Details
                </p>
                <hr className="my-5" />
                <form className="px-7">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="border rounded px-3 py-1.5 outline-none font-normal placeholder:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="border rounded px-3 py-1.5 outline-none font-normal placeholder:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="border rounded px-3 py-1.5 outline-none font-normal placeholder:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Enter your address"
                        className="border rounded px-3 py-1.5 outline-none font-normal placeholder:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        placeholder="Enter your city"
                        className="border rounded px-3 py-1.5 outline-none font-normal placeholder:opacity-60"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        id="country"
                        placeholder="Enter your country"
                        className="border rounded px-3 py-1.5 outline-none font-normal placeholder:opacity-60"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-5">
                    <button className="w-40 py-1.5 bg-primary text-base-100 rounded">
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:w-[30%] md:w-[40%] h-full">
              <div className="price_card relative">
                <div className="bg-gray-100 head text-secondary">
                  <h2 className="text-lg font-semibold">BASIC</h2>
                  <h2 className="text-3xl ">17500 Tk</h2>
                </div>
                <ul className="mt-8 pl-10">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Free Domain &
                    Hosing
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> E-Commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Blog
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Education
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> News Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Business
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Protfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Support 1 year
                  </li>
                </ul>

                <div className="absolute bottom-3 px-5 w-full flex flex-col gap-y-2">
                  <div className="flex items-center justify-between w-full text-sm">
                    <p className="uppercase">Subtotal</p>
                    <p className="text-gray-500">৳ 17500</p>
                  </div>
                  <div className="flex items-center justify-between w-full text-sm">
                    <p className="uppercase">Tax</p>
                    <p className="text-gray-500">৳ 00</p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="uppercase font-semibold">Total to pay</p>
                    <p className="text-primary">৳ 17500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignDetails;
