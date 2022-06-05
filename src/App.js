import FavouritePage from "./pages/FavouritePage/FavouritePage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/favourite' element={<FavouritePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
