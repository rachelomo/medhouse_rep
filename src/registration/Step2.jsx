import React, { useState } from 'react';
import './reg.css';
import CountrySelect from './CountrySelect';

const Step2 = ({ onNextBox, onPrevBox }) => {
    const [chosenBox, setChosenBox] = useState(null);
    const handleChoose = (boxNumber) => {
        setChosenBox(boxNumber);
    };

    const isBoxChosen = (boxNumber) => {
        return chosenBox === boxNumber;
    };

    const [setButton, setButtonVisible] = useState(true);
    const handleButtonClick = () => {
        setButtonVisible(false);
    };

    const [formData, setFormData] = useState({
        listingTitle: "",
        address: "",
        city: "",
        country: "",
        province: "",
        postalCode: "",
        phoneNumber: "",
    });

    const [selectedFunction, setSelectedFunction] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="registration-page px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
            <h1 className='text-center text-3xl mb-10 mt-20 font-normal'>Select your package</h1>
            <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Square 1 */}
                <div
                    className={`square border-4 border-gray-500 rounded-lg p-4 text-center ${isBoxChosen(1) ? 'chosen' : ''}`}
                    onClick={() => handleChoose(1)}
                >
                    <div className="info-icon">i</div>
                    <div className="para info-text text-blue-500 text-xl font-bold">MedsGold</div>
                    <div className="para text-blue-500 text-xl mb-2 font-bold">Yearly</div>
                    <div className="text-gray-700 text-lg mb-2 font-semibold">$129.00 <sub>/Year</sub></div>
                    <button
                        className={`choose-btn bg-gray-300 border-3 border-gray-300 rounded p-2 mt-4`}
                        onClick={() => onNextBox()}
                    >
                        {isBoxChosen(1) ? 'Selected' : 'Choose'}
                    </button>
                </div>

                {/* Square 2 */}
                <div
                    className={`square border-4 border-gray-500 rounded-lg p-4 text-center ${isBoxChosen(2) ? 'chosen' : ''}`}
                    onClick={() => handleChoose(2)}
                >
                    <div className="info-icon">i</div>
                    <div className="para info-text text-blue-500 text-xl font-bold">MedsBasic</div>
                    <div className="para text-blue-500 text-xl mb-2 font-bold">Yearly</div>
                    <div className="text-gray-700 text-lg mb-2 font-semibold">$89.00 <sub>/Year</sub></div>
                    <button
                        className={`choose-btn bg-gray-300 border-3 border-gray-300 rounded p-2 mt-4`}
                        onClick={() => onNextBox()}
                    >
                        {isBoxChosen(2) ? 'Selected' : 'Choose'}
                    </button>
                </div>

                {/* Square 3 */}
                <div
                    className={`square border-4 border-gray-500 rounded-lg p-4 text-center ${isBoxChosen(3) ? 'chosen' : ''}`}
                    onClick={() => handleChoose(3)}
                >
                    <div className="info-icon">i</div>
                    <div className="para info-text text-blue-500 text-xl font-bold">MedsBasic</div>
                    <div className="para text-blue-500 text-xl mb-2 font-bold">Monthly</div>
                    <div className="text-gray-700 text-lg mb-2 font-semibold">$19.00 <sub>/MONTH</sub></div>
                    <button
                        className={`choose-btn bg-gray-300 border-3 border-gray-300 rounded p-2 mt-4`}
                        onClick={() => onNextBox()}
                    >
                        {isBoxChosen(3) ? 'Selected' : 'Choose'}
                    </button>
                </div>
            </div>

            <h1 className='text-3xl text-center mb-10 mt-10 font-normal'>Housing Information</h1>
            <form>
                <div className="mb-8">
                    <input
                        type="text"
                        name="listingTitle"
                        value={formData.listingTitle}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                        placeholder="Listing Title"
                        required
                    />
                </div>
                <p className='mb-8'>For listing, make it short and eye-catching</p>

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

                <CountrySelect />

                <div className="mb-8">
                    <input
                        type="text"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                        placeholder="Province/State"
                        required
                    />
                </div>

                <div className="mb-8">
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                        placeholder="Postal Code"
                        required
                    />
                </div>

                <div className="mb-8">
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                        placeholder="Cell phone number"
                        required
                    />
                </div>

                {setButton && (
                    <button
                        onClick={() => setButtonVisible(false)}
                        className='bg-blue-800 w-full sm:w-1/2 text-white rounded py-2'
                    >
                        Upgrade to MedsGold to access the feature
                    </button>
                )}

                <h2 className='mt-8 text-2xl'>Enter your promo code below:</h2>
                <input
                    type="tel"
                    className="outline-none mt-1 p-4 w-full border border-gray-300 rounded"
                    placeholder="Promotion code"
                />
                <button className='bg-blue-800 text-white w-full sm:w-1/2 px-9 py-2 rounded mt-3'>
                    Apply
                </button>
            </form>
        </div>
    );
};

export default Step2;
