import './App.css';
import { Route, Routes } from "react-router-dom"; // Import useLocation
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      {/* Your other content goes here */}
      <Footer />

    </div>
  );
}

export default App;
