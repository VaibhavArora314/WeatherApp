import Weather from "./components/weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";

function App() {
  return (
    <div className="container">
      <Header />
      <Weather />
      <ToastContainer />
    </div>
  );
}

export default App;
