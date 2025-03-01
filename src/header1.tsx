import React from "react";
import './header1.css';
import logo from './novacoin.png'; 
import eth from './eth.png'; 
import btc from './bitcoin.png';
import spinico from './spinico.png';
import LanguageSelector from "./LanguageSelector";
import tbmenu from './assets/tbars.png';
import auflag from './assets/curflags/auround.png';
import aedflag from './assets/curflags/aedround.png';
import arsflag from './assets/curflags/arsround.png';
import bdtflag from './assets/curflags/bdtround.png';
import bgnflag from './assets/curflags/bgnround.png';
import bhdflag from './assets/curflags/bhdround.png';
import brlflag from './assets/curflags/brlround.png';
import bndflag from './assets/curflags/bndround.png';
import cadflag from './assets/curflags/cadround.png';
import chfflag from './assets/curflags/chfround.png';
import clpflag from './assets/curflags/clpround.png';
import cnyflag from './assets/curflags/cnyround.png';
import copflag from './assets/curflags/copround.png';
import crcflag from './assets/curflags/crcround.png';
import czkflag from './assets/curflags/czkround.png';
import dkkflag from './assets/curflags/dkkround.png';
import dopflag from './assets/curflags/dopround.png';
import egpflag from './assets/curflags/egpround.png';
import eurflag from './assets/curflags/eurround.png';
import gbpflag from './assets/curflags/gbpround.png';
import hkdflag from './assets/curflags/hkdround.png';
import hrkflag from './assets/curflags/hrkround.png';
import hufflag from './assets/curflags/hufround.png';
import idrflag from './assets/curflags/idrround.png';
import inrflag from './assets/curflags/inrround.png';
import ilsflag from './assets/curflags/ilsround.png';
import jpyflag from './assets/curflags/jpyround.png';
import kesflag from './assets/curflags/kesround.png';
import krwflag from './assets/curflags/krwround.png';
import kwdflag from './assets/curflags/kwdround.png';
import madflag from './assets/curflags/madround.png';
import mxnflag from './assets/curflags/mxnround.png';
import myrflag from './assets/curflags/myrround.png';
import ngnflag from './assets/curflags/ngnround.png';
import nokflag from './assets/curflags/nokround.png';
import nzdflag from './assets/curflags/nzdround.png';
import penflag from './assets/curflags/penround.png';
import phpflag from './assets/curflags/phpround.png';
import pkrflag from './assets/curflags/pkrround.png';
import plnflag from './assets/curflags/plnround.png';
import qarflag from './assets/curflags/qarround.png';
import ronflag from './assets/curflags/ronround.png';
import rsdflag from './assets/curflags/rsdround.png';
import rubflag from './assets/curflags/rubround.png';
import sarflag from './assets/curflags/sarround.png';
import sekflag from './assets/curflags/sekround.png';
import sgdflag from './assets/curflags/sgdround.png';
import thbflag from './assets/curflags/thbround.png';
import tryflag from './assets/curflags/tryround.png';
import uahflag from './assets/curflags/uahround.png';
import usdflag from './assets/curflags/usdround.png';
import uyuflag from './assets/curflags/uyuround.png';
import vndflag from './assets/curflags/vndround.png';
import zarflag from './assets/curflags/zarround.png';

const Header1: React.FC = () => {
  return (
    <>
    <header>
        <div className="mainheader">
          <img src={logo} alt="Logo" className='novacoinlogo' />
          <input type="text" placeholder="Search" className='searchbox' />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LanguageSelector />
          </div>
        </div>
      </header>
      <nav className="mainnav">
        <ul className='menu'>
          <li className='lihv'><a href="/">News</a></li>
          <li className='separador'>|</li>
          <li className='lihv'><a href="/bitcoin">Bitcoin</a></li>
          <li><img src={btc} alt="Bitcoin" className='bitcoin' /></li>
          <li className='separador'>|</li>
          <li className='lihv'><a href="/conversor">Ethereum</a></li>
          <li><img src={eth} alt="Ethereum" className='Ethereum' /></li>
          <li className='separador'>|</li>
          <li className='lihv'><a href="/conversor">Currency Conversion</a></li>
          <li><img src={spinico} alt="Currency Conversion" className='spinico' /></li>
        </ul>
        <div className='criptographs'>
          <h1 className='cripto1'>Crypto Graphs</h1>
        </div>
      </nav>
      <nav className='subnav'>
        <ul>
          <li>
            <a href="#" className='tbmenu'>
              <img src={tbmenu} alt="Menu" className='tbmenu' />
            </a>
          </li>
        </ul>
        <ul>
          <li className="menu-item">
            Crypto
            <ul className="crypto-menu">
  <li><a href="#">Bitcoin (BTC)</a></li>
  <li><a href="#">Ethereum (ETH)</a></li>
  <li><a href="#">Ripple (XRP)</a></li>
  <li><a href="#">Litecoin (LTC)</a></li>
  <li><a href="#">Cardano (ADA)</a></li>
  <li><a href="#">Polkadot (DOT)</a></li>
  <li><a href="#">Chainlink (LINK)</a></li>
  <li><a href="#">Binance Coin (BNB)</a></li>
  <li><a href="#">Solana (SOL)</a></li>
  <li><a href="#">Dogecoin (DOGE)</a></li>
  <li><a href="#">Sui (SUI)</a></li>
  <li><a href="#">Avalanche (AVAX)</a></li>
  <li><a href="#">Shiba Inu (SHIB)</a></li>
  <li><a href="#">Uniswap (UNI)</a></li>
  <li><a href="#">Polygon (MATIC)</a></li>
  <li><a href="#">Terra (LUNA)</a></li>
  <li><a href="#">Tron (TRX)</a></li>
  <li><a href="#">Monero (XMR)</a></li>
  <li><a href="#">Stellar (XLM)</a></li>
  <li><a href="#">Ethereum Classic (ETC)</a></li>
  <li><a href="#">VeChain (VET)</a></li>
  <li><a href="#">Cosmos (ATOM)</a></li>
  <li><a href="#">IOTA (IOT)</a></li>
  <li><a href="#">Tezos (XTZ)</a></li>
  <li><a href="#">Algorand (ALGO)</a></li>
  <li><a href="#">Aave (AAVE)</a></li>
  <li><a href="#">Maker (MKR)</a></li>
  <li><a href="#">SushiSwap (SUSHI)</a></li>
  <li><a href="#">Filecoin (FIL)</a></li>
  <li><a href="#">Chiliz (CHZ)</a></li>
  <li><a href="#">Elrond (EGLD)</a></li>
  <li><a href="#">Zcash (ZEC)</a></li>
  <li><a href="#">Paxos (PAX)</a></li>
  <li><a href="#">Fantom (FTM)</a></li>
  <li><a href="#">Kusama (KSM)</a></li>
  <li><a href="#">Hedera (HBAR)</a></li>
  <li><a href="#">Decentraland (MANA)</a></li>
  <li><a href="#">Enjin Coin (ENJ)</a></li>
  <li><a href="#">Hegic (HEGIC)</a></li>
  <li><a href="#">The Graph (GRT)</a></li>
  <li><a href="#">Lido (LDO)</a></li>
  <li><a href="#">Frax (Frax)</a></li>
  <li><a href="#">Theta (THETA)</a></li>
  <li><a href="#">Synthetix (SNX)</a></li>
  <li><a href="#">RenrenBit (RRB)</a></li>
  <li><a href="#">Basic Attention Token (BAT)</a></li>
  <li><a href="#">1inch (1INCH)</a></li>
  <li><a href="#">Celo (CELO)</a></li>
  <li><a href="#">PancakeSwap (CAKE)</a></li>
  <li><a href="#">TrueUSD (TUSD)</a></li>
  <li><a href="#">Loopring (LRC)</a></li>
  <li><a href="#">Kava (KAVA)</a></li>
  <li><a href="#">Ocean Protocol (OCEAN)</a></li>
  <li><a href="#">Enzyme (MLN)</a></li>
  <li><a href="#">Fantom (FTM)</a></li>
  <li><a href="#">Hegic (HEGIC)</a></li>
  <li><a href="#">Zilliqa (ZIL)</a></li>
  <li><a href="#">BakerySwap (BAKE)</a></li>
  <li><a href="#">Chia (XCH)</a></li>
  <li><a href="#">Firo (FIRO)</a></li>
  <li><a href="#">Reserve (RSV)</a></li>
  <li><a href="#">Nexo (NEXO)</a></li>
  <li><a href="#">Staking Rewards (STAKE)</a></li>
  <li><a href="#">Bancor (BNT)</a></li>
  <li><a href="#">Injective Protocol (INJ)</a></li>
  <li><a href="#">Yield Guild Games (YGG)</a></li>
  <li><a href="#">Serum (SRM)</a></li>
  <li><a href="#">Vyper (VYPER)</a></li>
  <li><a href="#">Balancer (BAL)</a></li>
  <li><a href="#">Yearn.finance (YFI)</a></li>
  <li><a href="#">Pundi X (PUNDIX)</a></li>
  <li><a href="#">ZRX (0x)</a></li>
  <li><a href="#">Mithril (MITH)</a></li>
  <li><a href="#">Waves (WAVES)</a></li>
  <li><a href="#">Gnosis (GNO)</a></li>
  <li><a href="#">Hegic (HEGIC)</a></li>
  <li><a href="#">Celo Dollar (cUSD)</a></li>
  <li><a href="#">dYdX (DYDX)</a></li>
  <li><a href="#">Biconomy (BICO)</a></li>
  <li><a href="#">Opium (OPIUM)</a></li>
  <li><a href="#">Alchemix (ALCX)</a></li>
  <li><a href="#">SuperFarm (SUPER)</a></li>
  <li><a href="#">MyNeighborAlice (ALICE)</a></li>
  <li><a href="#">Pax Dollar (USDP)</a></li>
  <li><a href="#">TitanSwap (TITAN)</a></li>
  <li><a href="#">YF Link (YFL)</a></li>
  <li><a href="#">Tranchess (CHESS)</a></li>
  <li><a href="#">Vera (VERA)</a></li>
  <li><a href="#">Solar (SXP)</a></li>
  <li><a href="#">Oraculos (ORAC)</a></li>
  <li><a href="#">Rari Capital (RARI)</a></li>
  <li><a href="#">The Sandbox (SAND)</a></li>
  <li><a href="#">Audius (AUDIO)</a></li>
  <li><a href="#">Ravencoin (RVN)</a></li>
  <li><a href="#">Wanchain (WAN)</a></li>
  <li><a href="#">Terra Virtua (TVK)</a></li>
  <li><a href="#">Render Token (RNDR)</a></li>
  <li><a href="#">Verasity (VRA)</a></li>
  <li><a href="#">Sora (XOR)</a></li>
  <li><a href="#">Conflux (CFX)</a></li>
  <li><a href="#">Stratis (STRAX)</a></li>
  <li><a href="#">Tomochain (TOMO)</a></li>
              </ul>
          </li>
        </ul>

        <li className='sepitbar'>|</li>

        <ul>
          <li className='curmenu'>
            Currencies 
            <ul className='submenucurrencies'>
              <li className='curcolor'><img src={auflag} className='curflags'></img><a href="en/aud">AUD</a></li>
              <li className='curcolor'><img src={aedflag} className='curflags'></img><a href="en/aed">AED</a></li>
              <li className='curcolor'><img src={arsflag} className='curflags'></img><a href="en/ars">ARS</a></li>
              <li className='curcolor'><img src={bdtflag} className='curflags'></img><a href="en/bdt">BDT</a></li>
              <li className='curcolor'><img src={bgnflag} className='curflags'></img><a href="en/bgn">BGN</a></li>
              <li className='curcolor'><img src={bhdflag} className='curflags'></img><a href="en/bhd">BHD</a></li>
              <li className='curcolor'><img src={brlflag} className='curflags'></img><a href="en/brl">BRL</a></li>
              <li className='curcolor'><img src={bndflag} className='curflags'></img><a href="en/bnd">BND</a></li>
              <li className='curcolor'><img src={cadflag} className='curflags'></img><a href="en/cad">CAD</a></li>
              <li className='curcolor'><img src={chfflag} className='curflags'></img><a href="en/chf">CHF</a></li>
              <li className='curcolor'><img src={clpflag} className='curflags'></img><a href="en/clp">CLP</a></li>
              <li className='curcolor'><img src={cnyflag} className='curflags'></img><a href="en/cny">CNY</a></li>
              <li className='curcolor'><img src={copflag} className='curflags'></img><a href="en/cop">COP</a></li>
              <li className='curcolor'><img src={crcflag} className='curflags'></img><a href="en/crc">CRC</a></li>
              <li className='curcolor'><img src={czkflag} className='curflags'></img><a href="en/czk">CZK</a></li>
              <li className='curcolor'><img src={dkkflag} className='curflags'></img><a href="en/dkk">DKK</a></li>
              <li className='curcolor'><img src={dopflag} className='curflags'></img><a href="en/dop">DOP</a></li>
              <li className='curcolor'><img src={egpflag} className='curflags'></img><a href="en/egp">EGP</a></li>
              <li className='curcolor'><img src={eurflag} className='curflags'></img><a href="en/eur">EUR</a></li>
              <li className='curcolor'><img src={gbpflag} className='curflags'></img><a href="en/gbp">GBP</a></li>
              <li className='curcolor'><img src={hkdflag} className='curflags'></img><a href="en/hkd">HKD</a></li>
              <li className='curcolor'><img src={hrkflag} className='curflags'></img><a href="en/hrk">HRK</a></li>
              <li className='curcolor'><img src={hufflag} className='curflags'></img><a href="en/huf">HUF</a></li>
              <li className='curcolor'><img src={idrflag} className='curflags'></img><a href="en/idr">IDR</a></li>
              <li className='curcolor'><img src={inrflag} className='curflags'></img><a href="en/inr">INR</a></li>
              <li className='curcolor'><img src={ilsflag} className='curflags'></img><a href="en/ils">ILS</a></li>
              <li className='curcolor'><img src={jpyflag} className='curflags'></img><a href="en/jpy">JPY</a></li>
              <li className='curcolor'><img src={kesflag} className='curflags'></img><a href="en/kes">KES</a></li>
              <li className='curcolor'><img src={krwflag} className='curflags'></img><a href="en/krw">KRW</a></li>
              <li className='curcolor'><img src={kwdflag} className='curflags'></img><a href="en/kwd">KWD</a></li>
              <li className='curcolor'><img src={madflag} className='curflags'></img><a href="en/mad">MAD</a></li>
              <li className='curcolor'><img src={mxnflag} className='curflags'></img><a href="en/mxn">MXN</a></li>
              <li className='curcolor'><img src={myrflag} className='curflags'></img><a href="en/myr">MYR</a></li>
              <li className='curcolor'><img src={ngnflag} className='curflags'></img><a href="en/ngn">NGN</a></li>
              <li className='curcolor'><img src={nokflag} className='curflags'></img><a href="en/nok">NOK</a></li>
              <li className='curcolor'><img src={nzdflag} className='curflags'></img><a href="en/nzd">NZD</a></li>
              <li className='curcolor'><img src={penflag} className='curflags'></img><a href="en/pen">PEN</a></li>
              <li className='curcolor'><img src={phpflag} className='curflags'></img><a href="en/php">PHP</a></li>
              <li className='curcolor'><img src={pkrflag} className='curflags'></img><a href="en/pkr">PKR</a></li>
              <li className='curcolor'><img src={plnflag} className='curflags'></img><a href="en/pln">PLN</a></li>
              <li className='curcolor'><img src={qarflag} className='curflags'></img><a href="en/qar">QAR</a></li>
              <li className='curcolor'><img src={ronflag} className='curflags'></img><a href="en/ron">RON</a></li>
              <li className='curcolor'><img src={rsdflag} className='curflags'></img><a href="en/rsd">RSD</a></li>
              <li className='curcolor'><img src={rubflag} className='curflags'></img><a href="en/rub">RUB</a></li>
              <li className='curcolor'><img src={sarflag} className='curflags'></img><a href="en/sar">SAR</a></li>
              <li className='curcolor'><img src={sekflag} className='curflags'></img><a href="en/sek">SEK</a></li>
              <li className='curcolor'><img src={sgdflag} className='curflags'></img><a href="en/sgd">SGD</a></li>
              <li className='curcolor'><img src={thbflag} className='curflags'></img><a href="en/thb">THB</a></li>
              <li className='curcolor'><img src={tryflag} className='curflags'></img><a href="en/try">TRY</a></li>
              <li className='curcolor'><img src={uahflag} className='curflags'></img><a href="en/uah">UAH</a></li>
              <li className='curcolor'><img src={usdflag} className='curflags'></img><a href="en/usd">USD</a></li>
              <li className='curcolor'><img src={uyuflag} className='curflags'></img><a href="en/uyu">UYU</a></li>
              <li className='curcolor'><img src={vndflag} className='curflags'></img><a href="en/vnd">VND</a></li>
              <li className='curcolor'><img src={zarflag} className='curflags'></img><a href="en/zar">ZAR</a></li>
            </ul>
          </li>
        </ul>

        <li className='sepitbar'>|</li>

        <ul>
          <li className='chartsmenu'>
            Charts
            <ul className='submenucharts'>
              <li className='curcolor'><a href="#">Exchange Rates</a></li>
              <li className='curcolor'><a href="#">Crypto Trends</a></li>
              <li className='curcolor'><a href="#">Top Gainers</a></li>
              <li className='curcolor'><a href="#">Top Losers</a></li>
              <li className='curcolor'><a href="#">Volatility Index</a></li>
              <li className='curcolor'><a href="#">Inflation Rates</a></li>
              <li className='curcolor'><a href="#">Market Cap</a></li>
            </ul>
          </li>
        </ul>

        <li className='sepitbar'>|</li>

        <ul>
          <li className='giveaways'>
            <a href='/en/giveaways' className='giveaway'>Giveaways</a>
          </li>
        </ul>
      </nav>
      </>
  );
};

export default Header1;
