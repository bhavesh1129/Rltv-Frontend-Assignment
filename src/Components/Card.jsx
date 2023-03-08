import React, { useState, useEffect } from 'react';

const Card = ({ cryptoId }) => {

    // Set initial state of data to null
    const [data, setData] = useState(null);

    // Fetch data from API and update state with useEffect
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}?market_data=true`);
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, [cryptoId]);

    // Render loading message if data is not yet available
    if (!data) {
        return <div>Loading...</div>;
    }

    // Extract relevant data from API response
    const image = data.image.large;
    const name = data.name;
    const symbol = data.symbol;
    const price = data.market_data.current_price.usd;
    const priceChange = data.market_data.price_change_percentage_24h;
    const tvl = data.market_data.ath.usd;

    // Format price and tvl for display
    const desiredPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    const desiredTVL = tvl.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    // Render card with extracted data and formatted values
    return (
        <div class="w-full px-10 pt-10" style={{ background: '#14172B' }}>
            <div class="container mx-auto">
                <div class="flex items-center justify-center">

                    {/* CARDS */}
                    {/* This is a section containing information about a cryptocurrency */}
                    <div class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 border-2 border-b-0 rounded-3xl border-gray-700" style={{ fontFamily: 'Tomorrow' }}>
                        <div class="rounded-3xl overflow-hidden" style={{
                            background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)',
                            left: '0.34%',
                            right: '0.09%',
                            top: '12.48%',
                            bottom: '0%',
                        }}>
                            <div class="absolute -mt-20 w-full flex justify-center">

                                {/* This is a section containing information about a cryptocurrency */}
                                <div class="h-32 w-32 rounded-full" style={{ background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)' }}>
                                    <img alt="crypto-img" src={image} class="h-full w-full rounded-full object-center object-cover p-5 border-t-2 border-gray-700" />
                                </div>
                            </div>
                            <div class="px-6 mt-16 flex-col items-center justify-center ">

                                {/* This is the name of the cryptocurrency */}
                                <h1 className='crypto-name text-md font-semibold flex items-center justify-center text-gray-400 mb-4'>{name} ({symbol.toUpperCase()})</h1>

                                <div className='flex justify-center border-t-2 border-gray-700 rounded-2xl h-12 p-2 mb-4' style={{ background: '#14172B' }}>

                                    {/* This is the current price and its percentage change */}
                                    <div className='crypto-current-price text-xl text-white mb-4 font-bold mr-6'>{desiredPrice}</div>
                                    {
                                        priceChange >= 0 ?
                                            (
                                                <span className='crypto-percentage text-lg text-green-300 mb-4 font-semibold'>+{priceChange}%</span>
                                            ) :
                                            (
                                                <span className='crypto-percentage text-lg text-red-300 mb-4 font-semibold'>{priceChange}%</span>
                                            )
                                    }

                                </div>

                                {/* This is the label for the price */}
                                <h1 className='crypto-price text-md font-semibold flex items-center justify-center text-gray-400 mb-4'>Price</h1>
                                <div className='flex justify-center rounded-2xl h-12 p-2 mb-4 border-t-2 border-gray-700' style={{ background: '#14172B' }}>

                                    {/* This is the all-time high for the cryptocurrency */}
                                    <div className='crypto-all-time-high text-xl justify-center text-white mb-4 font-bold'>{desiredTVL}</div>
                                </div>

                                {/* This is the label for TVL */}
                                <h1 className='flex items-center justify-center crypto-tvl text-md font-semibold text-gray-400 mb-7'>TVL</h1>
                                <div className='flex items-center justify-center'>
                                    <div className='flex justify-around rounded-3xl w-36 h-12 p-2 mb-4' style={{ background: '#14172B' }}>

                                        {/* This is an image of the Solana cryptocurrency logo */}
                                        <img alt="solana-crypto-img" src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" className='' />

                                        {/* This is an image of the Ethereum cryptocurrency logo */}
                                        <img alt="eth-crypto-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png" className='bg-white rounded-full p-1 w-8' />

                                        {/* This is an image of the Binance cryptocurrency logo */}
                                        <img alt="binance-crypto-img" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png" className='bg-white rounded-full p-1' />
                                    </div>
                                </div>

                                {/* This is a label for popular pairs */}
                                <p className='crypto-popular-pairs text-md font-semibold mb-4 text-gray-400 flex items-center justify-center'>Popular pairs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export the Card component
export default Card;