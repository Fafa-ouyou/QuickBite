import './App.css';
import Header from './component/1-Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/2-Home/Home';
import About from './component/4-About us/About';
import Contact from './component/5-Contact/Contact';
import Menu from './component/3-Menu/Menu';
import Footer from './component/6-Footer/Footer'
import Panier from './component/3-Menu/Panier';
import DetailPizza from './component/3-Menu/detailPizza';

function App() {

  return (
  <Router>
    <div className="App">
      
       <Header/>
       <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/About"
            element={<About/>}
          />
          <Route
            path="/Contact"
            element={<Contact/>}
          />
          <Route
            path="/Menu"
            element={<Menu />}
          />
          <Route
            path="/DetailPizza/:id"
            element={<DetailPizza />}
          />
          <Route
            path="/Panier/:id"
            element={<Panier  />}
          />
            

             {/* <Route
            path="/Panier"
            element={<Panier  />}
          /> */}
            

       </Routes>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;
