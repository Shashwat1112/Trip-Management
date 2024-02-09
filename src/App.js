import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GuideLogin from "./Components/Guide/GuideLogin";
import CustomerLogin from "./Components/Customer/CustomerLogin";

function App() {
  return (
    <div className="App">
      <GuideLogin />
      <CustomerLogin />
    </div>
  );
}

export default App;
