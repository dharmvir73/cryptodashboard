import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "XRP", "LTC", "ADA", "INR", "USD"];

  const [PrimaryCurrency, setPrimaryCurrency] = useState("BTC");
  const [SecondaryCurrency, setSecondaryCurrency] = useState("USD");

  const [amount, setAmount] = useState(1);

  const [exhangeRate, setExchangeRate] = useState(0);

  const [loading, setLoading] = useState(false);

  const convert = () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: process.env.REACT_APP_API_URL,
      params: {
        from_currency: PrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: SecondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter">
      <h2 className="head">Crypto Currency Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>
                <p style={{ textAlign: "right" }}>Primary Currency :</p>
              </td>
              <td>
                <input
                  className="InputFirst"
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={PrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}> {currency} </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency :</td>
              <td>
                <input
                  className="InputSecond"
                  type="number"
                  name="currency-amount-2"
                  value={Math.floor(exhangeRate)}
                  disabled=" "
                />
              </td>
              <td>
                <select
                  style={{ border: "none" }}
                  value={SecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}> {currency} </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="button-30" id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>

      {
        <ExchangeRate
          exchange={exhangeRate}
          firstC={PrimaryCurrency}
          secondC={SecondaryCurrency}
          loading={loading}
        />
      }
    </div>
  );
};

export default CurrencyConverter;
