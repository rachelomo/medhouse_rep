import React from "react";
import Currency from './Currency';

const Component = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12">
            <h1 className='text-center text-3xl sm:text-4xl md:text-5xl mb-10 mt-20 font-normal'>
                Housing Details
            </h1>
            <p className="bg-orange-50 px-4 py-5 text-center">
                Minimum short term stay is determined by landlord and local regulations.
            </p>
            <form action="" className="mt-4">
                <div className="mb-8">
                    <input className="outline-none mb-4 sm:mb-8" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4 mr-4" htmlFor="doctor">Short term rental</label>
                    <input className="outline-none mb-4 sm:mb-8" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Long term rental</label>
                </div>

                <select className="outline-none mt-1 p-4 w-full border border-gray-300 rounded mb-8">
                    <option value="us">Property type</option>
                    <option value="ca">Apartment</option>
                    <option value="uk">Basement</option>
                    <option value="uk">Real Estate Agent</option>
                    <option value="uk">Bed and Breakfast</option>
                    <option value="uk">Condo</option>
                    <option value="uk">Duplex</option>
                    <option value="uk">For sale</option>
                    <option value="uk">House</option>
                    <option value="uk">Maisonette (self contained separate entrance)</option>
                    <option value="uk">Room to rent shared communal</option>
                </select>

                <div className="mb-8">
                    <input type="text" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" placeholder="Daily rent" />
                </div>

                <div className="mb-8">
                    <input type="text" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" defaultValue="0.00" onChange={(e) => e.target.value} placeholder="Weekly rent" />
                </div>

                <div className="mb-8">
                    <input type="text" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" defaultValue="0.00" onChange={(e) => e.target.value} placeholder="Monthly rent" />
                </div>

                <Currency />

                <div className="mb-8 mt-8">
                    <input type="text" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" placeholder="Number of bedrooms" />
                </div>

                <div className="mb-8">
                    <input type="text" className="outline-none mt-1 p-4 w-full border border-gray-300 rounded" placeholder="Number of bathrooms" />
                </div>

                <div className="mb-8">
                    <input className="outline-none mb-4 sm:mb-8" type="radio" id="doctor" name="renting" value="" />
                    <label className="ml-4 mr-4" htmlFor="doctor">Furnished</label>
                    <input className="outline-none mb-4 sm:mb-8" type="radio" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Unfurnished</label>
                </div>

                <h1 className="font-normal text-2xl sm:text-3xl">Amenities</h1>
                <div className="space-y-2">
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Near Med School/Hospital (within 20 minutes by car)</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Walkable to Public Transit/Shopping/Amenities</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Video Virtual Tour Available</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">All Utilities included</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Some utilities included</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Gym/Fitness room</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Pool</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Pet friendly</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">No pets allowed</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Available Parking (may or may not be included in rent)</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Indoor Parking (may or may not be included in rent)</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">In-unit Laundry</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">A/C</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Child friendly</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Dishwasher</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">On Site Concierge 24 hours</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">EV Charger on premises or nearby</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Landlord is a member of the medical community</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">No smoking/vaping/cannabis</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Outdoor space/Balcony/Backyard</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Storage</label><br />
                    <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                    <label className="ml-4" htmlFor="doctor">Office space</label><br />
                </div>

                <div className="flex justify-center">
                    <button className="bg-blue-500 text-white rounded-full p-3 w-full sm:w-48">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Component;
