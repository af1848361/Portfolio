import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { routes } from "./utilities";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
