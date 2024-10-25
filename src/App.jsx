import "./App.scss";
import Data from "./helpers/staticData";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  const cards = Data.map((item, index) => {
    return (
      <div key={item.id}>
        <Card {...item} />
        {index < Data.length - 1 && <hr className="hr" />}
      </div>
    );
  });

  return (
    <div className="travel-journal">
      <Navbar />
      <div className="card__list">{cards}</div>
    </div>
  );
}

export default App;
