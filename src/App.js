import NewsFeed from "./components/NewsFeed"
import CurrencyConverter from "./components/CurrencyConverter"


const App = () => {
  return ( 
    <div className="app-container">
      <h1 className="title-One">CRYPTO CURRENCY CONVERTER LIVE CRYPTO PRICES IN RUPEES</h1>
      <div className="app">
      <CurrencyConverter />
      <NewsFeed />
      </div>
    </div>
   );
}
 
export default App;
