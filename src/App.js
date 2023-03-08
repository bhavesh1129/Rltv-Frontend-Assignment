import React from 'react';
import Card from "./Components/Card";

function App() {
  const cryptos = ['bitcoin', 'solana', 'ethereum', 'binance-usd', 'shiba-inu'];
  return (
    <>
      {cryptos.map((crypto) => (
        <Card key={crypto} cryptoId={crypto} />
      ))}
    </>
  );
}

export default App;
