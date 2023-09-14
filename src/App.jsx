import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteCompany from "./components/FavouritesCompany";
import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
    <TopBar />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouriteCompany />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
