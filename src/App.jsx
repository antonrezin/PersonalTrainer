import { Routes, Route } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/AppBar/MyAppBar";
import Home from "./components/Home/Home";
import CustomersList from "./components/Customers/CustomersList";
import TrainingsList from "./components/Trainings/TrainingsList";

function App() {
  return (
    <div>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/trainings" element={<TrainingsList />} />
      </Routes>
    </div>
  );
}

export default App;
