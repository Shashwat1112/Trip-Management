import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import CustomerLogin from "./Components/Customer/CustomerLogin";
import ForgotPwd from "./Components/Forgot Password/ForgotPwd";
import AddTours from "./Components/Add Tours-Events/AddTours";
import ErrorPage from "./Components/Error/ErrorPage";
import GuideLogin from "../src/Components/Guide/GuideLogin"
import AdminLogin from "./Admin/AdminLogin";
import CustomerSignup from "./Components/Customer/CustomerSignup";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Tour from "./Components/Tour/Tour";
import AboutUs from "./Components/AboutUs/AboutUs";
function App() {
  return (
   
      <div className="App">
         <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Customer_Login" element={<CustomerLogin/>}/>
          <Route path="Forgot_password" element={<ForgotPwd/>}/>
          <Route path="Add_Tours" element={<AddTours/>}/>
          {/* <Route path="Contact" element={<ContactForm/>}></Route> */}
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="Guide_Login" element={<GuideLogin/>}/>
          <Route path="Admin_Login" element={<AdminLogin/>}></Route>
          <Route path="Customer_Signup" element={<CustomerSignup/>}></Route>
          <Route path="Contact" element={<Contact/>}></Route>
          <Route path="Tour" element={<Tour/>}></Route>
          <Route path="About_Us" element={<AboutUs/>}></Route>
          {/* Add more routes here if needed */}
        </Routes>
        <Footer/>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
