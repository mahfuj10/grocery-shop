import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './Pages/AboutUs/AboutUs';
import AllProducts from './Pages/AllProducts/AllProducts';
import CategoriesShop from './Pages/CategoriesShop/CategoriesShop/CategoriesShop';
import ContactUS from './Pages/ContactUS/ContactUS';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AccountSetting from './Pages/Dashboard/DashboardRoutes/AccountSetting/AccountSetting';
import AddProduct from './Pages/Dashboard/DashboardRoutes/AddProduct/AddProduct';
import AddTestimonials from './Pages/Dashboard/DashboardRoutes/AddTestimonials/AddTestimonials';
import MakeAdmin from './Pages/Dashboard/DashboardRoutes/MakeAdmin/MakeAdmin';
import ManageOrders from './Pages/Dashboard/DashboardRoutes/ManageOrders/ManageOrders';
import ManageProducts from './Pages/Dashboard/DashboardRoutes/ManageProducts/ManageProducts';
import ManagetesTimonials from './Pages/Dashboard/DashboardRoutes/ManagetesTimonials/ManagetesTimonials';
import MyOrders from './Pages/Dashboard/DashboardRoutes/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/DashboardRoutes/MyProfile/MyProfile';
import { ScrollTop } from './Pages/Home/CartProducts/CartDrawer/ScroolTop';
import Home from './Pages/Home/Home/Home';
import BotttomNav from './Pages/Home/Shared/BotttomNav/BotttomNav';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Navigation from './Pages/Home/Shared/Navigation/Navigation';
import PrivateRoute from './Pages/Home/Shared/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import Offers from './Pages/Offers/Offers/Offers';
import SingleFood from './Pages/SingleProduct/SingleFood/SingleFood';


function App() {



  return (

    <Router>

      {/* <Navigation />*/}
      {/* <ScrollTop /> */}

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<PrivateRoute><ContactUS /></PrivateRoute>} />
        <Route path="/category=/:origin" element={<CategoriesShop />} />
        <Route path="/single-details/:id" element={<SingleFood />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:searchProduct" element={<AllProducts />} />


        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>

          <Route path="/dashboard" element={<MyProfile />} />

          <Route path="addreview" element={<AddTestimonials />} />

          <Route path="accountsetting" element={<AccountSetting />} />

          <Route path="myorder" element={<MyOrders />} />

          <Route path="myprofile" element={<MyProfile />} />

          <Route path="addproduct" element={<AddProduct />} />

          <Route path="makeadmin" element={<MakeAdmin />} />

          <Route path="manageorders" element={<ManageOrders />} />

          <Route path="manageproduct" element={<ManageProducts />} />

          <Route path="managetestimonials" element={<ManagetesTimonials />} />


        </Route>

      </Routes>

      {/* <Footer />*/}
      {/* <BotttomNav /> */}

    </Router>
  );
}

export default App;
