import React from "react";
import './solana.css';
import AdComponent from "../AdComponent";

const Solana: React.FC = () => {
  return (
    <div className="container">
      <div className="boxleft">
        <h1 className="solana">About Solana (SOL)</h1>
        <div className="coininfo">
          <div className="coininfo1">
            <p className="solana2">Market Rank #6</p>
            <p className="solana3">
            </p>
          </div> 
            
            <div className="solana4">
            <p className="maxsupply"> Total Supply<br></br> 594m</p>
            </div>
            <div className="solana5">
              <a href='https://solana.com' className="solanaweb"> Solana Website </a>
            </div>
        </div>
        <div className="boxleft1">
          <p className="solana1">
         ‎ ‎  Solana is a high-performance blockchain designed to support decentralized applications (dApps) and large-scale transactions with efficiency and speed. Created in 2017 by Anatoly Yakovenko, the Solana network stands out for its innovative hybrid consensus approach, combining Proof of History (PoH) with Proof of Stake (PoS).

Thanks to this technology, Solana can process thousands of transactions per second, offering extremely low fees and fast confirmation times. Its ecosystem includes DeFi, NFTs, gaming, and various other decentralized applications, making it one of the leading alternatives for developers and investors in the blockchain space.

With a focus on scalability and decentralization, Solana continues to innovate and expand its global adoption.
          </p>
        </div>
      </div>
      <div className="criptoheader">
        <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana"  className="solpng"/>
        <h1 className="criptoname">
          Solana (USD)
        </h1>
      </div>
    </div>
  );
};

export default Solana;