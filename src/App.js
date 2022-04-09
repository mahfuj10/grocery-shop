import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CategoriesShop from './Pages/CategoriesShop/CategoriesShop/CategoriesShop';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddTestimonials from './Pages/Dashboard/DashboardRoutes/AddTestimonials/AddTestimonials';
import ManagetesTimonials from './Pages/Dashboard/DashboardRoutes/ManagetesTimonials/ManagetesTimonials';
import MyOrders from './Pages/Dashboard/DashboardRoutes/MyOrders/MyOrders';
import { ScrollTop } from './Pages/Home/CartProducts/CartDrawer/ScroolTop';
import Home from './Pages/Home/Home/Home';
import BotttomNav from './Pages/Home/Shared/BotttomNav/BotttomNav';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Navigation from './Pages/Home/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Offers from './Pages/Offers/Offers/Offers';
import SingleFood from './Pages/SingleProduct/SingleFood/SingleFood';


function App() {

  return (

    <Router>

      {/* <Navigation />
      <ScrollTop /> */}

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/category=/:origin" element={<CategoriesShop />} />
        <Route path="/single-details/:id" element={<SingleFood />} />
        <Route path="/login" element={<Login />} />


        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route path="/Dashboard" element={<DashboardDefault />}></Route> */}

          <Route path="addreview" element={<AddTestimonials />}></Route>

          <Route path="myorder" element={<MyOrders />}></Route>

          <Route path="managetestimonials" element={<ManagetesTimonials />}></Route>

          {/* 
          <Route path="MyBooking" element={<MyBooking />}></Route>
          <Route path="ServiceReview" element={<ServiceReview />}></Route>
          <Route path="Payment" element={<Payment />}></Route>
          <Route path="AddPlan" element={<AddPlan />}></Route>
          <Route path="ManagePlan" element={<ManagePlan />}></Route>
          <Route path="ManageBooking" element={<ManageBooking />}></Route>
          <Route path="MakeAdmin" element={<MakeAdmin />}></Route>
          <Route path="Pay/:_id" element={<Pay />}></Route> */}
          {/* <Route path="payment" element={<Payment />}></Route> */}
        </Route>

      </Routes>

      {/* <Footer />
      <BotttomNav /> */}

    </Router>
  );
}

export default App;
