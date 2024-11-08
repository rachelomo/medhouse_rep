import React, { useState } from "react";
import waitinRoom from "../images/waitinRoom.jpg";
import StepIndicator from "./StepIndicator";
import CountrySelect from "./CountrySelect";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import axios from "axios";
import Step6 from './Step6';

const SignUp = ({ currentStep, onNextStep, onPrevStep }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rentingType: "",
    email: "",
    confirmEmail: "",
    address: "",
    city: "",
    country: "",
    province: "",
    postalCode: "",
    phone: "",
    password: "",
    confirmPassword: "",
    discoveryMethod: "Facebook/socialmedia",
    receiveNewsletter: false,
  });
  const [selectedFunction, setSelectedFunction] = useState("");
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFunctionChange = (event) => {
    setSelectedFunction(event.target.value);
  };

  const handleCountrySelect = (selectedCountry) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry.value,
    }));
  };

  return (
    <div>
      <div className="bg-gray-200">
        {currentStep !== 6 && (
          <div className="py-0 px-4 md:px-12 lg:px-24 font-sans mt-20 ">
            <div className="relative">
              <img
                src={waitinRoom}
                alt="firstImage"
                className="w-full h-80 object-cover mt-20"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-70">
                <p className="text-white text-4xl font-semibold">
                  JOIN THE MEDSHOUSING COMMUNITY!
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="px-4 md:px-12 lg:px-24">
          <div className={`${currentStep === 6 ? 'mt-44 ' : ''} `}>
            <StepIndicator
              currentStep={currentStep}
              onNext={onNextStep}
              onBack={onPrevStep}
            />
          </div>
          <div
            className={`registration-page ${currentStep === 1 ? "active" : ""}`}
            style={{ display: currentStep === 1 ? "block" : "none" }}
          >
            <div className="mx-auto p-8 text-center sm:px-12 lg:px-20 xl:px-32">
              <h1 className="text-2xl sm:text-3xl mb-6 text-black">
                Create your <span className="font-bold">landlord account</span>{" "}
                here
              </h1>
              <p className="mb-8 text-gray-800 text-center">
                MedsHousing.com is the premier website dedicated to helping
                landlords reach out to five-star tenants from the academic medical community. Complete the landlord form below and start <br /> finding your tenants!
              </p>

              <div>
                <h2 className="text-2xl font-normal mb-8">
                  Contact Information
                </h2>
                <form action="">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="Last name"
                      required
                    />
                  </div>

                  <div className="text-left text-gray-700">
                    <h1 className="mb-2 text-2xl text-black">Functions</h1>
                    <div className="space-y-4">
                      <input
                        className="outline-none"
                        type="radio"
                        id="doctor"
                        name="renting"
                        value="Medical Doctor with property/room for rent"
                        checked={selectedFunction === "Medical Doctor with property/room for rent"}
                        onChange={handleFunctionChange}
                      />
                      <label className="ml-4" htmlFor="doctor">
                        Medical Doctor with property/room for rent
                      </label>

                      <input
                        className="outline-none"
                        type="radio"
                        id="trainee"
                        name="renting"
                        value="Medical Trainee renting my property/room"
                        checked={selectedFunction === "Medical Trainee renting my property/room"}
                        onChange={handleFunctionChange}
                      />
                      <label className="ml-4" htmlFor="trainee">
                        Medical Trainee renting my property/room
                      </label>

                      <input
                        className="outline-none"
                        type="radio"
                        id="community"
                        name="renting"
                        value="Private Community Landlord"
                        checked={selectedFunction === "Private Community Landlord"}
                        onChange={handleFunctionChange}
                      />
                      <label className="ml-4" htmlFor="community">
                        Private Community Landlord
                      </label>

                      <input
                        className="outline-none"
                        type="radio"
                        id="property"
                        name="renting"
                        value="Property Manager"
                        checked={selectedFunction === "Property Manager"}
                        onChange={handleFunctionChange}
                      />
                      <label className="ml-4" htmlFor="property">
                        Property Manager
                      </label>

                      <input
                        className="outline-none"
                        type="radio"
                        id="others"
                        name="renting"
                        value="Other Health Care person with a property/room for rent"
                        checked={selectedFunction === "Other Health Care person with a property/room for rent"}
                        onChange={handleFunctionChange}
                      />
                      <label className="ml-4" htmlFor="others">
                        Other Health Care person with a property/room for rent
                      </label>
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="mb-8">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="E-mail"
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <input
                      type="email"
                      name="confirmEmail"
                      value={formData.confirmEmail}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="Confirm email"
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="Address"
                      required
                    />
                  </div>

                  {/* Other Inputs */}
                  <div className="mb-8">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="City"
                      required
                    />
                  </div>
                  <CountrySelect onSelectCountry={handleCountrySelect} />
                  <div className="mb-8">
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="Province"
                      required
                    />
                  </div>

                  {/* Continue with remaining fields */}
                  <div className="mb-8">
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="Postal code"
                      required
                    />
                  </div>

                  <div className="mb-8">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="Phone number"
                      required
                    />
                  </div>

                  <div className="mb-8">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="mb-8">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                      placeholder="Confirm password"
                      required
                    />
                  </div>

                  <div className="mb-8">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        


          {
            currentStep === 2 && (
              <>
                <Step2
                  onNextStep={onNextStep}
                  onPrevStep={onPrevStep}
                  onNextStep={onNextStep}
                />
                <button
                  onClick={onNextStep}
                  className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
                >
                  Next
                </button>
              </>
            )
          }
          {
            currentStep === 3 && (
              // Step 3 content
              <>
                <Step3
                  onNextStep={onNextStep}
                  onPrevStep={onPrevStep}
                  onNextStep={onNextStep}
                />
                <button
                  onClick={onNextStep}
                  className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
                >
                  Next
                </button>
              </>
            )
          }
          {
            currentStep === 4 && (
              <>
                <Step4
                  onNextStep={onNextStep}
                  onPrevStep={onPrevStep}
                  onNextStep={onNextStep}
                />
                <button
                  onClick={onNextStep}
                  className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
                >
                  Skip
                </button>
              </>
            )
          }
          {
            currentStep === 5 && (
              <>
                <Step5
                  onNextStep={onNextStep}
                  onPrevStep={onPrevStep}
                  onNextStep={onNextStep}
                />
                <button
                  onClick={onNextStep}
                  className="mt-20 bg-blue-800 text-white text-left align-left px-12 py-2 rounded"
                >
                  Next
                </button>
              </>
            )
          }




        </div>

      </div>
      {currentStep === 6 && (
        <>

          <Step6 />

        </>

      )}
    </div>
  );
};
export default SignUp;
