import React, { useState } from 'react';
import './CurrencyMenu.css';
import auflag from '../assets/curflags/auround.png'
import aedflag from '../assets/curflags/aedround.png';
import arsflag from '../assets/curflags/arsround.png';
import bdtflag from '../assets/curflags/bdtround.png';
import bgnflag from '../assets/curflags/bgnround.png';
import bhdflag from '../assets/curflags/bhdround.png';
import brlflag from '../assets/curflags/brlround.png';
import bndflag from '../assets/curflags/bndround.png';
import cadflag from '../assets/curflags/cadround.png';
import chfflag from '../assets/curflags/chfround.png';
import clpflag from '../assets/curflags/clpround.png';
import cnyflag from '../assets/curflags/cnyround.png';
import copflag from '../assets/curflags/copround.png';
import crcflag from '../assets/curflags/crcround.png';
import czkflag from '../assets/curflags/czkround.png';
import dkkflag from '../assets/curflags/dkkround.png';
import dopflag from '../assets/curflags/dopround.png';
import egpflag from '../assets/curflags/egpround.png';
import eurflag from '../assets/curflags/eurround.png';
import gbpflag from '../assets/curflags/gbpround.png';
import hkdflag from '../assets/curflags/hkdround.png';
import hrkflag from '../assets/curflags/hrkround.png';
import hufflag from '../assets/curflags/hufround.png';
import idrflag from '../assets/curflags/idrround.png';
import inrflag from '../assets/curflags/inrround.png';
import ilsflag from '../assets/curflags/ilsround.png';
import jpyflag from '../assets/curflags/jpyround.png';
import kesflag from '../assets/curflags/kesround.png';
import krwflag from '../assets/curflags/krwround.png';
import kwdflag from '../assets/curflags/kwdround.png';
import madflag from '../assets/curflags/madround.png';
import mxnflag from '../assets/curflags/mxnround.png';
import myrflag from '../assets/curflags/myrround.png';
import ngnflag from '../assets/curflags/ngnround.png';
import nokflag from '../assets/curflags/nokround.png';
import nzdflag from '../assets/curflags/nzdround.png';
import penflag from '../assets/curflags/penround.png';
import phpflag from '../assets/curflags/phpround.png';
import pkrflag from '../assets/curflags/pkrround.png';
import plnflag from '../assets/curflags/plnround.png';
import qarflag from '../assets/curflags/qarround.png';
import ronflag from '../assets/curflags/ronround.png';
import rsdflag from '../assets/curflags/rsdround.png';
import rubflag from '../assets/curflags/rubround.png';
import sarflag from '../assets/curflags/sarround.png';
import sekflag from '../assets/curflags/sekround.png';
import sgdflag from '../assets/curflags/sgdround.png';
import thbflag from '../assets/curflags/thbround.png';
import tryflag from '../assets/curflags/tryround.png';
import uahflag from '../assets/curflags/uahround.png';
import usdflag from '../assets/curflags/usdround.png';
import uyuflag from '../assets/curflags/uyuround.png';
import vndflag from '../assets/curflags/vndround.png';
import zarflag from '../assets/curflags/zarround.png';

interface Currency {
  code: string;
  flagImage: string; 
  name: string;
}

interface CurrencyMenuProps{
  selectedCurrency:string;
  setSelectedCurrency:(currency:string)=>void;
}

const CurrencyMenu: React.FC<CurrencyMenuProps> = ({selectedCurrency, setSelectedCurrency}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  

  const currencies: Currency[] = [
    { code: 'AUD', flagImage: auflag, name: 'Australian Dolar' },
    { code: 'AED', flagImage: aedflag, name: 'Dirham dos Emirados' },
    { code: 'ARS', flagImage: arsflag, name: 'Peso Argentino' },
    { code: 'BDT', flagImage: bdtflag, name: 'Taka de Bangladesh' },
    { code: 'BGN', flagImage: bgnflag, name: 'Lev Búlgaro' },
    { code: 'BHD', flagImage: bhdflag, name: 'Dinar do Bahrein' },
    { code: 'BRL', flagImage: brlflag, name: 'Real Brasileiro' },
    { code: 'BND', flagImage: bndflag, name: 'Dólar de Brunei' },
    { code: 'CAD', flagImage: cadflag, name: 'Dólar Canadense' },
    { code: 'CHF', flagImage: chfflag, name: 'Franco Suíço' },
    { code: 'CLP', flagImage: clpflag, name: 'Peso Chileno' },
    { code: 'CNY', flagImage: cnyflag, name: 'Chinese Yuan' },
    { code: 'COP', flagImage: copflag, name: 'Peso Colombiano' },
    { code: 'CRC', flagImage: crcflag, name: 'Colón Costarriquenho' },
    { code: 'CZK', flagImage: czkflag, name: 'Coroa Checa' },
    { code: 'DKK', flagImage: dkkflag, name: 'Coroa Dinamarquesa' },
    { code: 'DOP', flagImage: dopflag, name: 'Peso Dominicano' },
    { code: 'EGP', flagImage: egpflag, name: 'Libra Egípcia' },
    { code: 'EUR', flagImage: eurflag, name: 'Euro' },
    { code: 'GBP', flagImage: gbpflag, name: 'Libra Esterlina' },
    { code: 'HKD', flagImage: hkdflag, name: 'Dólar de Hong Kong' },
    { code: 'HRK', flagImage: hrkflag, name: 'Kuna Croata' },
    { code: 'HUF', flagImage: hufflag, name: 'Florim Húngaro' },
    { code: 'IDR', flagImage: idrflag, name: 'Rupia Indonésia' },
    { code: 'INR', flagImage: inrflag, name: 'Rupia Indiana' },
    { code: 'ILS', flagImage: ilsflag, name: 'Novo Shekel Israelense' },
    { code: 'JPY', flagImage: jpyflag, name: 'Iene Japonês' },
    { code: 'KES', flagImage: kesflag, name: 'Xelim Queniano' },
    { code: 'KRW', flagImage: krwflag, name: 'Won Sul-Coreano' },
    { code: 'KWD', flagImage: kwdflag, name: 'Dinar Kuwaitiano' },
    { code: 'MAD', flagImage: madflag, name: 'Dirham Marroquino' },
    { code: 'MXN', flagImage: mxnflag, name: 'Peso Mexicano' },
    { code: 'MYR', flagImage: myrflag, name: 'Ringgit Malaio' },
    { code: 'NGN', flagImage: ngnflag, name: 'Naira Nigeriana' },
    { code: 'NOK', flagImage: nokflag, name: 'Coroa Norueguesa' },
    { code: 'NZD', flagImage: nzdflag, name: 'Dólar Neozelandês' },
    { code: 'PEN', flagImage: penflag, name: 'Sol Peruano' },
    { code: 'PHP', flagImage: phpflag, name: 'Peso Filipino' },
    { code: 'PKR', flagImage: pkrflag, name: 'Rupia Paquistanesa' },
    { code: 'PLN', flagImage: plnflag, name: 'Zloty Polonês' },
    { code: 'QAR', flagImage: qarflag, name: 'Rial Catarense' },
    { code: 'RON', flagImage: ronflag, name: 'Leu Romeno' },
    { code: 'RSD', flagImage: rsdflag, name: 'Dinar Sérvio' },
    { code: 'RUB', flagImage: rubflag, name: 'Rublo Russo' },
    { code: 'SAR', flagImage: sarflag, name: 'Rial Saudita' },
    { code: 'SEK', flagImage: sekflag, name: 'Coroa Sueca' },
    { code: 'SGD', flagImage: sgdflag, name: 'Dólar de Singapura' },
    { code: 'THB', flagImage: thbflag, name: 'Baht Tailandês' },
    { code: 'TRY', flagImage: tryflag, name: 'Lira Turca' },
    { code: 'UAH', flagImage: uahflag, name: 'Hryvnia Ucraniana' },
    { code: 'USD', flagImage: usdflag, name: 'Dólar Americano' },
    { code: 'UYU', flagImage: uyuflag, name: 'Peso Uruguaio' },
    { code: 'VND', flagImage: vndflag, name: 'Dong Vietnamita' },
    { code: 'ZAR', flagImage: zarflag, name: 'Rand Sul-Africano' },
  ];

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleCurrencyChange = (currency: Currency): void => {
    setSelectedCurrency(currency.code);
    setIsOpen(false); 
  };

  const selected = currencies.find(currency => currency.code === selectedCurrency);

  return (
    <div className="currency-menu">
      <div className="currency-header" onClick={toggleMenu}>
        <img src={selected?.flagImage} alt={selected?.name} className="currency-flag" />
        <span className="currency-name">{selected?.name}</span>
      </div>
      {isOpen && (
        <ul className="currency-list">
          {currencies.map(currency => (
            <li
              key={currency.code}
              className="currency-item"
              onClick={() => handleCurrencyChange(currency)}
            >
              <img src={currency.flagImage} alt={currency.name} className="currency-flag" />
              <span className="currency-name">{currency.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencyMenu;