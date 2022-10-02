import "./App.css";
import Card from "./components/Card/Card";
import FantomAnalytics from "./components/FantomAnalytics/FantomAnalytics";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Lottery from "./components/Lottery/Lottery";
import Profit from "./components/Profits/Profit";
import Rewards from "./components/Rewards/Rewards";
import World from "./components/World/World";

function App() {
  return (
    <div className="App">
      <Header />
      <FantomAnalytics />
      <World />
      <Profit />
      <Lottery />
      <Card />

      <Rewards />
      <Footer />
    </div>
  );
}

export default App;
