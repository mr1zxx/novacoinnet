import React, { useState } from 'react';
import CurrencyMenu from './CurrencyMenu';
import Conversor from '../pages/conversor';

const CurrencyApp: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('AUD'); // Moeda padrão

  return (
    <div>
      <CurrencyMenu selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
      <Conversor selectedCurrency={selectedCurrency} />
    </div>
  );
};

export default CurrencyApp;