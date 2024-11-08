import React from "react";
import Calendar from "./Calendar";

const Componen = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-center text-3xl sm:text-2xl md:text-3xl mb-6 mt-10 font-normal">
                Availability Form
            </h1>
            <p className="bg-orange-50 px-4 py-5 text-center text-sm sm:text-base">
                Hint: Keep this calendar up to date to increase your contacts. (Click a month to block a full month)
            </p>
            <p className="mb-6 mt-6 text-sm sm:text-base">
                You can synchronize the calendar of availability of your ad with one from another website (Airbnb, Home Away, Google Calendar, etc.).
            </p>
            <p className="text-sm sm:text-base">
                To do so, you must copy/paste the link of the calendar below. Once done, your calendar will be updated every night.
            </p>
            <div className="mb-6">
                <input
                    type="text"
                    className="outline-none mt-4 p-4 w-full border border-gray-300 rounded sm:text-sm md:text-base"
                    placeholder="Link with external calendar (URL)"
                />
            </div>
            <div className="flex items-center mb-6">
                <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-2 sm:ml-4 text-sm sm:text-base" htmlFor="doctor">Dates available</label>
            </div>
            <div className="flex items-center mb-8">
                <input className="outline-none" type="checkbox" id="doctor" name="renting" value="" />
                <label className="ml-2 sm:ml-4 text-sm sm:text-base" htmlFor="doctor">Dates not available</label>
            </div>
            <div className="mt-6 md:mt-8">
                <Calendar />
            </div>
        </div>
    );
}

export default Componen;
