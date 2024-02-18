import waitinRoom from "../images/slider_1.jpg";
import pricing_1 from "../assets/pricing_1.png";
import pricing_2 from "../assets/pricing_2.png";
import pricing_3 from "../assets/pricing_3.png";
import pricing_4 from "../assets/pricing_4.png";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "8.8vw" }}
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

        <ul className="mt-20 text-black ml-20 list-disc">
          <li>
            Choose from our <strong>MedsBasic</strong> or{" "}
            <strong>MedsGold</strong> plans to offer your property to this great
            pool of medical professional tenants
          </li>
          <li>
            Note that only <strong>MedsGold</strong> Landlords have exclusive
            access to
            <strong> Tenant Want Ads</strong>
          </li>
          <li>
            Look for our various options to <strong>MedsFeature</strong> or
            <strong>MedsBoost</strong> your listing for inceased visibility
          </li>
          <li>
            <strong>Best deal ever! </strong>Our pricing is in Canadian dollars
          </li>
        </ul>
        <div className="bg-customBlue text-center p-10 w-90 mt-10">
          <h3 className="text-white text-2xl">Have more than 1 property?</h3>
          <p className="text-red-600 text-2xl mt-2">
            We offer 50% off additional listings in the same category!
          </p>
        </div>
        <div className="mt-20 flex justify-between gap-8">
          <div className="bg-customBlue w-[70vw]  ">
            <div className="flex justify-center">
              <img
                src={pricing_1}
                alt="pricing image"
                className="max-w-full max-h-full"
              />
            </div>
            <h3>MedsBasic Monthly</h3>
            <p>
              Our basic listing option for a quick one-month posting. Feel lucky
              and you think your property will rent quickly? Or maybe you just
              want to try us out? Then choose this low-cost option.
            </p>
            {/* </div> */}
            <div>
              <span>$19/month</span>
              <ul>
                <li>30-day listing</li>
                <li>5 images</li>
                <li>Availability Calendar</li>
              </ul>
            </div>
            <Link to="/sighup">
              Choose
              <br />
              MedsBasic Monthly
            </Link>
          </div>
          <div className="bg-brown w-[70vw]">
            <div className="flex justify-center">
              <img src={pricing_1} alt="pricing image" />
              <img src={pricing_2} alt="pricing image" />
            </div>
            <h3>MedsBasic Yearly</h3>
            <p>
              List for a year and save! When you go with MedsBasic Yearly, you
              know your property will be posted hassle-free for a year, at a
              great price. (Optional: Medical trainees often look for properties
              many months, or sometime years in advance. With our MedsBasic and
              MedsGold yearly plans, your property is listed year-round for
              medical trainee tenants who are looking well in advan)
            </p>
            <div>
              <span>$89/year</span>
              <ul>
                <li>365-day listing</li>
                <li>5 images</li>
                <li>Availability Calendar</li>
                <li>
                  <strong>MedsFeature</strong>and <strong>MedsBoost </strong>{" "}
                  options available
                </li>
                {/* <li></li> */}
              </ul>
            </div>
            <div>
              <Link to="/signup">
                Choose <br /> MedBasic yearly
              </Link>
            </div>
          </div>
          <div className="bg-deepFade w-[70vw]">
            <div className="flex justify-center">
              <img src={pricing_1} alt="pricing image" />
              <img src={pricing_2} alt="pricing image" />
              <img src={pricing_3} alt="pricing image" />
            </div>
            <h3>MedsGold Yearly</h3>
            <p>
              Our gold standard. One year hassle-free, and your listing will
              appear above the MedsBasic listings, giving you more views. Also
              comes with one-month Home Page MedsFeature free of charge. More
              views, more tenants!
            </p>
            <div>
              <span>$129/year</span>
              <ul>
                <li>365-day listing</li>
                <li>25 images</li>
                <li>Availability Calendar</li>
                <li>Listed above MedsBasic listings</li>
                <li>
                  Home Page MedsFeature for <br />
                  one month free (new listings only){" "}
                </li>
                <li>
                  MedsFeature and MedsBoost <br />
                  options available
                </li>
                <li>
                  Exclusive access to tenant want <br /> ads
                  <li>
                    Get SMS/Text messages when <br /> you get a request
                  </li>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/signup">
                Choose <br />
                MedGold Yearly
              </Link>
            </div>
          </div>
          <div className="bg-blue-300 w-[70vw]">
            <div className="flex justify-center">
              <img src={pricing_4} alt="pricing image" />
            </div>
            <h3>Urgent</h3>
            <p>
              Get tenants faster. Show an urgent tag on your listing attract
              tenants by showing urgency
            </p>
            <div>
              <span>$15for 7 days</span>
              <ul>
                <li>Top of all listings for 7 days</li>
                <li>
                  Boosts your ad in every location (home page, medical schools,
                  listings)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
