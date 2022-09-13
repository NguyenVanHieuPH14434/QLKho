import Header from "./Shared/Header/header";
import Transaction from "./components/Transaction/transaction";
import Producer from "./components/Producer/producer";
import Consignment from "./components/Consignment/Consignment";
import Pharmacy from "./components/Pharmarcy/pharmacy";
import Management from "./components/Management/management";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Producer />}></Route>
        <Route path="transaction" element={<Transaction />}></Route>
        <Route path="producer" element={<Producer />}></Route>
        <Route path="consignment" element={<Consignment />}></Route>
        <Route path="pharmacy" element={<Pharmacy />}></Route>
        <Route path="management" element={<Management />}></Route>
      </Routes>
    </div>
  );
}

export default App;
