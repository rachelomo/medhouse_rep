import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

function CurrencySelect() {
    const [currencies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get('https://currencyapi.net/api/v1/currencies', {
                    params: {
                        key: 'Ln14rvlskIx2nFKwB2JUYU80j08JUTRrqiLa',
                        output: 'JSON',
                    },
                });

                const currencyList = Object.entries(response.data.currencies).map(([code, name]) => ({
                    value: code,
                    label: `${name} (${code})`,
                }));

                setCurrencies(currencyList);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching currencies:', error.message);
            }
        };

        fetchCurrencies();
    }, []);

    const handleCurrencyChange = (selectedOption) => {
        setSelectedCurrency(selectedOption);
    };

    if (loading) {
        return <p>Loading currencies...</p>;
    }

    return (
        <div className=''>
            <Select className=''
                options={currencies}
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                isSearchable
            />
        </div>
    );
}

export default CurrencySelect;
