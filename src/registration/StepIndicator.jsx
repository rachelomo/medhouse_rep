import React from 'react';

const StepIndicator = ({ currentStep, onNext, onBack }) => {
    const steps = [
        { number: 1, text: 'Registration' },
        { number: 2, text: 'Address' },
        { number: 3, text: 'Details' },
        { number: 4, text: 'Photos' },
        { number: 5, text: 'Availability' },
        { number: 6, text: 'Payment' }
    ];

    const handleBack = () => {
        if (currentStep > 1) {
            onBack();
        }
    };

    return (
        <div className="flex flex-col items-center mt-4 md:space-y-4 space-y-2">
            <div className="flex flex-wrap justify-center space-x- sm:space-x-4 md:space-x-6 w-full">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center space-y-1 w-1/3 sm:w-1/4 md:w-auto p-1"
                    >
                        <div
                            className={`step w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gray-300 ${
                                currentStep === step.number
                                    ? 'bg-blue-500 text-white font-bold'
                                    : 'bg-white text-gray-500'
                            }`}
                        >
                            {step.number}
                        </div>
                        <p
                            className={`text-xs sm:text-sm md:text-base ${
                                currentStep === step.number ? 'font-bold text-black' : 'text-gray-500'
                            } text-center`}
                        >
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex space-x-2 sm:space-x-4 mt-4">
                {currentStep > 1 && (
                    <button
                        className="w-20 sm:w-24 h-8 sm:h-10 md:w-28 md:h-12 flex items-center justify-center rounded border border-gray-300 bg-white text-blue-500 text-xs sm:text-sm"
                        onClick={handleBack}
                    >
                        {'< Back'}
                    </button>
                )}
                {currentStep < steps.length && (
                    <button
                        className={`w-20 sm:w-24 h-8 sm:h-10 md:w-28 md:h-12 flex items-center justify-center rounded border border-gray-300 ${
                            currentStep === 1 ? 'bg-blue-600 text-white font-bold' : 'bg-blue-500 text-white font-bold'
                        } text-xs sm:text-sm`}
                        onClick={onNext}
                    >
                        {currentStep === 1 ? 'Next Step' : 'Next >'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default StepIndicator;
