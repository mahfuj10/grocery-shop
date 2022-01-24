import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Navigation from './Pages/Home/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Offers from './Pages/Offers/Offers/Offers';
import SingleFood from './Pages/SingleProduct/SingleFood/SingleFood';


function App() {

  return (

    <Router>

      <Navigation />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/single-details/:id" element={<SingleFood />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
