import waitinRoom from "../assets/slider_1.jpg";
import pricing_1 from "../assets/pricing_1.png";
import pricing_2 from "../assets/pricing_2.png";
import pricing_3 from "../assets/pricing_3.png";
import pricing_4 from "../assets/pricing_4.png";
import { Link } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="relative">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "10vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl">PRICING</p>
        </div>
      </div>

      <div>
        <div>
          <p className="text-center text-3xl mt-10 text-black">
            Welcome to our Pricing page!
          </p>
        </div>

        <ul className="mt-10 text-black mx-5 md:mx-20 list-disc space-y-4">
          <li>
            Choose from our <strong>MedsBasic</strong> or{" "}
            <strong>MedsGold</strong> plans to offer your property to this great
            pool of medical professional tenants
          </li>
          <li>
            Note that only <strong>MedsGold</strong> Landlords have exclusive
            access to <strong>Tenant Want Ads</strong>
          </li>
          <li>
            Look for our various options to <strong>MedsFeature</strong> or
            <strong>MedsBoost</strong> your listing for increased visibility
          </li>
          <li>
            <strong>Best deal ever!</strong> Our pricing is in Canadian dollars
          </li>
        </ul>

        <div className="bg-[#0c527b] text-center p-6 md:p-20 mt-10">
          <h3 className="text-white text-2xl">Have more than 1 property?</h3>
          <p className="text-2xl mt-2 text-red-500">
            We offer 50% off additional listings in the same category!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-10">
          {/* MedsBasic Monthly */}
          <div className="bg-[#0c527b] p-3 md:w-full rounded-md">
            <div className="flex justify-center">
              <img
                src={pricing_1}
                alt="pricing image"
                className="max-w-full max-h-full"
              />
            </div>
            <h3 className="mt-3 text-center text-4xl text-white font-semibold">
              MedsBasic Monthly
            </h3>
            <p className="text-center text-white text-sm mt-3">
              Our basic listing option for a quick one-month posting. Perfect if
              you think your property will rent quickly or want to try us out.
            </p>
            <p className="text-white text-center mt-10 font-semibold text-4xl">
              $19<span className="text-sm">/month</span>
            </p>
            <ul className="text-white mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <IoIosCheckmark /> 30-day listing
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> 5 images
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> Availability Calendar
              </li>
            </ul>
            <div className="mt-10 text-center">
              <Link
                to="/signup"
                className="bg-white text-black p-3 rounded-md hover:bg-black hover:text-white transition duration-300"
              >
                Choose MedsBasic Monthly
              </Link>
            </div>
          </div>

          {/* MedsBasic Yearly */}
          <div className="bg-gray-800 p-3 md:w-full rounded-md relative right-0 md:relative md:right-2">
            <div className="flex justify-center">
              <img src={pricing_1} alt="pricing image" />
              <img src={pricing_2} alt="pricing image" />
            </div>
            <h3 className="mt-3 text-center text-4xl text-white font-semibold">
              MedsBasic Yearly
            </h3>
            <p className="text-center text-white text-sm mt-3">
              List for a year and save! Perfect for medical trainees searching
              in advance.
            </p>
            <p className="text-white text-center mt-10 font-semibold text-4xl">
              $89<span className="text-sm">/year</span>
            </p>
            <ul className="text-white mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <IoIosCheckmark /> 365-day listing
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> 5 images
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> Availability Calendar
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> MedsFeature and MedsBoost options
              </li>
            </ul>
            <div className="mt-10 text-center">
              <Link
                to="/signup"
                className="bg-white text-black p-3 rounded-md hover:bg-black hover:text-white transition duration-300"
              >
                Choose MedsBasic Yearly
              </Link>
            </div>
          </div>

          {/* MedsGold Yearly */}
          <div className="bg-yellow-800 p-3 md:w-full rounded-md relative right-0 md:relative md:right-5">
            <div className="flex justify-center">
              <img src={pricing_1} alt="pricing image" />
              <img src={pricing_2} alt="pricing image" />
              <img src={pricing_3} alt="pricing image" />
            </div>
            <h3 className="mt-3 text-center text-4xl text-white font-semibold">
              MedsGold Yearly
            </h3>
            <p className="text-center text-white text-sm mt-3">
              Our premium package. Increased visibility with exclusive features.
            </p>
            <p className="text-white text-center mt-10 font-semibold text-4xl">
              $129<span className="text-sm">/year</span>
            </p>
            <ul className="text-white mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <IoIosCheckmark /> 365-day listing
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> 25 images
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> Listed above MedsBasic listings
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> MedsFeature and MedsBoost options
              </li>
            </ul>
            <div className="mt-10 text-center">
              <Link
                to="/signup"
                className="bg-white text-black p-3 rounded-md hover:bg-black hover:text-white transition duration-300"
              >
                Choose MedsGold Yearly
              </Link>
            </div>
          </div>

          {/* Urgent */}
          <div className="bg-blue-600 p-4 relative right-0 md:relative md:right-8 md:w-full rounded-md">
            <div className="flex justify-center">
              <img src={pricing_4} alt="pricing image" />
            </div>
            <h3 className="mt-3 text-center text-4xl text-white font-semibold">
              Urgent
            </h3>
            <p className="text-center text-white text-sm mt-3">
              Get tenants faster. Show an "Urgent" tag on your listing.
            </p>
            <p className="text-white text-center mt-10 font-semibold text-4xl">
              $15<span className="text-sm"> for 7 days</span>
            </p>
            <ul className="text-white mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <IoIosCheckmark /> Top of all listings for 7 days
              </li>
              <li className="flex items-center">
                <IoIosCheckmark /> Boosts your ad in every location
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-grey mt-10 text-black">
        <p>
          And try our various <strong className="text-black">options</strong> to
          increase the visibility of your listing :
        </p>
        <ul className="list-disc ml-5 mt-5">
          <li>
            <strong className="text-black"> MedsBoost</strong>: One-time boost
            of your listing to the top of your category for $1 + tax.
          </li>
          <li>
            Home Page <strong className="text-black"> MedsFeature</strong>:
            Increase your visibility! Display your listing on the MedsHousing
            Home Page for $15/month + tax.
          </li>
          <li>
            Urgent! <strong className="text-black"> MedsFeature</strong>: Get
            tenants faster. Show an Urgent! tag on your listing. Puts your ad to
            the top of all listings for 7 days for a low price of $15 + tax.
          </li>
          <li>
            Medschool <strong className="text-black"> MedsFeature</strong>: Move
            your ad to the top of the Medical School page, within your category
            (<strong className="text-black">MedsBasic</strong> or{" "}
            <strong className="text-black">MedsGold</strong> ). Another way to
            increase the visibility of your listing for a low $15/month + tax.
          </li>
        </ul>
        <h3 className="mt-7 ml-1">
          You own <strong className="text-black">multiple properties</strong>?
          We offer special pricing to landlords with 5+ listings. Please contact
          us at{" "}
          <Link
            to="mailto:info@medshousing.com"
            className="text-blue-400 hover:underline text-black"
          >
            {" "}
            info@medshousing.com.
          </Link>
        </h3>
      </div>
      <h3 className="text-center text-black text-3xl mt-20">
        Pay your package for 1 year, <strong>save money</strong> and access more
        features!
      </h3>
    </div>
  );
};

export default Pricing;
