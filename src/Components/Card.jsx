import React, { useState, useEffect } from 'react';

const Card = ({ cryptoId }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}?market_data=true`);
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, [cryptoId]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const image = data.image.large;
    const name = data.name;
    const symbol = data.symbol;
    const price = data.market_data.current_price.usd;
    const priceChange = data.market_data.price_change_percentage_24h;
    const tvl = data.market_data.ath.usd;

    const desiredPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    const desiredTVL = tvl.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <div class="w-full px-10 pt-10" style={{ background: '#14172B' }}>
            <div class="container mx-auto">
                <div class="flex items-center justify-center">
                    {/* CARDS */}
                    <div class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 border-2 border-b-0 rounded-3xl border-gray-700" style={{ fontFamily: 'Tomorrow' }}>
                        <div class="rounded-3xl overflow-hidden" style={{
                            background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)',
                            left: '0.34%',
                            right: '0.09%',
                            top: '12.48%',
                            bottom: '0%',
                        }}>
                            <div class="absolute -mt-20 w-full flex justify-center">
                                <div class="h-32 w-32 rounded-full" style={{ background: 'linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)' }}>
                                    <img alt="crypto-img" src={image} class="h-full w-full rounded-full object-center object-cover p-5 border-t-2 border-gray-700" />
                                </div>
                            </div>
                            <div class="px-6 mt-16 flex-col items-center justify-center ">
                                <h1 className='crypto-name text-md font-semibold flex items-center justify-center text-gray-400 mb-4'>{name} ({symbol.toUpperCase()})</h1>

                                <div className='flex justify-center border-t-2 border-gray-700 rounded-2xl h-12 p-2 mb-4' style={{ background: '#14172B' }}>
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

                                <h1 className='crypto-price text-md font-semibold flex items-center justify-center text-gray-400 mb-4'>Price</h1>
                                <div className='flex justify-center rounded-2xl h-12 p-2 mb-4 border-t-2 border-gray-700' style={{ background: '#14172B' }}>
                                    <div className='crypto-all-time-high text-xl justify-center text-white mb-4 font-bold'>{desiredTVL}</div>
                                </div>
                                <h1 className='flex items-center justify-center crypto-tvl text-md font-semibold text-gray-400 mb-7'>TVL</h1>
                                <div className='flex items-center justify-center'>
                                    <div className='flex justify-around rounded-3xl w-36 h-12 p-2 mb-4' style={{ background: '#14172B' }}>
                                        <img alt="solana-crypto-img" src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" className='' />

                                        <img alt="eth-crypto-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png" className='bg-white rounded-full p-1 w-8' />

                                        <img alt="binance-crypto-img" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png" className='bg-white rounded-full p-1' />

                                    </div>
                                </div>
                                <p className='crypto-popular-pairs text-md font-semibold mb-4 text-gray-400 flex items-center justify-center'>Popular pairs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;