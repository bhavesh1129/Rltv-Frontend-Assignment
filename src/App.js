// Import the React library
import React from 'react';

// Import the CryptoCard component from the Components folder
import Card from "./Components/Card";

// Define the App component
function App() {

  // Create an array of cryptocurrencies
  const cryptos = ['bitcoin', 'solana', 'ethereum', 'binance-usd', 'shiba-inu'];
  
  // Render the component to display the list of cryptocurrencies
  return (
    <>
      {cryptos.map((crypto) => (
        // Render a Card component for each cryptocurrency in the array
        <Card key={crypto} cryptoId={crypto} />
      ))}
    </>
  );
}

// Export the App component
export default App;
