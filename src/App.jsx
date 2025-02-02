import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import MyAppBar from "./components/AppBar/MyAppBar";
import Home from "./components/Home/Home";
import CustomersList from "./components/Customers/CustomersList";
import TrainingsList from "./components/Trainings/TrainingsList";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/trainings" element={<TrainingsList />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
