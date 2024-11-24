import "./App.css";
import MyAppBar from "./components/AppBar/MyAppBar";
import CustomersList from "./components/Customers/CustomersList";
import TrainingsList from "./components/Trainings/TrainingsList";

function App() {
  return (
    <div>
      <MyAppBar />
      <CustomersList />
    </div>
  );
}

export default App;
