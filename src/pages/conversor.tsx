import React, { useState, useEffect } from 'react';
import './converter.css';
import CurrencyMenu from '../apps/CurrencyMenu';
import CurrencyMenu2 from '../apps/CurrencyMenu2';
import arrow from '../assets/angle-right-icon.png';
import AdComponent from '../AdComponent';

interface ConversorProps {
  selectedCurrency: string; 
}

const Conversor: React.FC<ConversorProps> = ({ selectedCurrency }) => {
  const [base, setBase] = useState("BTC");
  const [final, setFinal] = useState(selectedCurrency); 
  const [dados, setDados] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const buscarPreco = () => {
    setLoading(true);
    fetch(`https://bumpy-teeth-chew.loca.lt/moeda/${base}/${final}`)
      .then(response => response.json())
      .then(data => {
        setDados(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar moeda:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    buscarPreco();
  }, [final]); 

  return (
    <>
      <div className='containermain'>
        <div className='adbox1'>
          <AdComponent />
        </div>
        <div className='conversor'>
          <div className='cvstext1'>
            <h1 className='cvstext'>Currency Converter</h1>
          </div>
          <div className='insertvalue'>
            <input type="number" placeholder='Insert value' className='input1' />
          </div>
          <div className='excur'>
            <CurrencyMenu selectedCurrency={selectedCurrency} setSelectedCurrency={() => {}} />
          </div>
          <div className='arrowdiv'>
            <img src={arrow} className='arrow' />
          </div>
          <div className='excur2'>
            <CurrencyMenu2 />
          </div>
        </div>
        <div className='adbox2'>
          <AdComponent />
        </div>
      </div>
    </>
  );
};

export default Conversor;
