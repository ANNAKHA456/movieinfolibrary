import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import MovieDetail from "./components/MovieDetail";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/details/:movieName" element={<MovieDetail />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
