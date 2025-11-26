import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SearchResults from "./components/SearchResults/SearchResults";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchResults" element={<SearchResults />} />
        </Routes>
    );
};

export default App;
