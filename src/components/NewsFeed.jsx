import axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./Coin";
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false

const NewsFeed = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterCoins = coins.filter((coin) => coin.name.toLowerCase());

  return (
    <div className="news-feed">
      <h2 className="header">Live Crpyto Prices</h2>
      <div className="scroller">
        {loading
          ? "Loading...."
          : filterCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                />
              );
            })}
      </div>
    </div>
  );
};

export default NewsFeed;
