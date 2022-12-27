

const Coin = ({image, name, symbol, price, volume, priceChange}) => {

    const Pchange = priceChange;


    return (  
        <div className="coin-container">
             <div className="coin-row">
                 <div className="coin">
                     <img src={image} alt="crypto" />
                     <h1>{name}</h1>
                 </div>
                 <div className="coin-data">
                 <div className="coin-symbol">{symbol}</div>
                     <p className="coin-price">₹{price}</p>
                     <p className="coin-volume">₹{volume.toLocaleString()}
                     </p>
                     {Pchange < 0 ? (<p className="coin-percent red">{Pchange}%</p>) 
                     : (<p className="coin-percent green">{Pchange}%</p>)
                     }  
                 </div>
             </div>
             
        </div>  
     );
}
export default Coin;