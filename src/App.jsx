import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./Components/MainHome/Home/Body";
import Bodyone from "./Components/Products/Bodyone";
import FoodProducts from "./Components/Products/FoodProducts";
import RestaurantDetails from "./Components/Products/RestaurantDetails";
import HealthDetails from "./Components/Products/HealthProducts/HealthDetails";
import HealthProducts from "./Components/Products/HealthProducts/HealthProducts";
import GroceryDetails from "./Components/Products/GroceryProducts/GroceryDetails";
import GroceryProducts from "./Components/Products/GroceryProducts/GroceryProducts";
import BeautyProducts from "./Components/Products/BeautyProducts/BeautyProducts";
import BeautyDetails from "./Components/Products/BeautyProducts/BeautyDetails";
import DrinkProducts from "./Components/Products/HouseProducts/HouseProducts";
import DrinkDetails from "./Components/Products/HouseProducts/HouseDetails";
import PlantProducts from "./Components/Products/PlantProducts/PlantProducts";
import PlantDetails from "./Components/Products/PlantProducts/PlantDetails";
import PetProducts from "./Components/Products/PetProducts/PetProducts";
import PetDetails from "./Components/Products/PetProducts/PetDetails";
import Bodytwo from "./Components/Help/Bodytwo";
import CustomerHelp from "./Components/Help/CustomerHelp";
import MerchantHelp from "./Components/Help/MerchantHelp";
import LogisticsHelp from "./Components/Help/LogisticsHelp";
import Body3 from "./Components/About/Body3";
import MerchantAccount from "./Components/Merchantaccount/Merchantaccount";
import MerchantSignin from "./Components/Merchantaccount/MerchantSignin";
import RiderAccount from "./Components/RiderAccount/Rideraccount";
import PaymentPage from "./Components/Products/PaymentPage";
import SignIn from "./Components/Sign/Signin";
import ConfirmationPage from "./Components/Sign/ConfirmationPage";
import TechProducts from "./Components/Products/TechProducts/TechProducts";
import TechDetails from "./Components/Products/TechProducts/TechDetails";
import ClothingProducts from "./Components/Products/ClothingProducts/ClothingProducts";
import ClothingDetails from "./Components/Products/ClothingProducts/ClothingDetails";
import HouseholdDetails from "./Components/Products/HouseProducts/HouseDetails";
import HouseholdProducts from "./Components/Products/HouseProducts/HouseProducts";
import TermsandConditions from "./Components/Merchantaccount/TermsandConditions";
import Privacy from "./Components/Information/Privacy";
import Terms from "./Components/Information/Terms";
import UserForm from "./Components/UserAccount/UserForm";
import Dashboard from "./Components/Merchantaccount/Dashboard";
import ViewAllPredictions from "./Components/MainHome/Home/ViewAllPredictions";
import VendorPayment from "./Components/Merchantaccount/VendorPayment";
import RedirectApp from "./Components/Merchantaccount/RedirectApp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/viewall" element={<ViewAllPredictions />} />
        <Route path="/products" element={<Bodyone />} />

        <Route path="/help" element={<Bodytwo />} />
        <Route path="/customer-help" element={<CustomerHelp />} />
        <Route path="/merchant-help" element={<MerchantHelp />} />
        <Route path="/logistics-help" element={<LogisticsHelp />} />
        <Route path="/about" element={<Body3 />} />
        <Route path="/merchant" element={<MerchantAccount />} />
        <Route path="/vendor-payment" element={<VendorPayment />} />
        <Route path="/redirect-app" element={<RedirectApp />} />

        <Route path="/rider" element={<RiderAccount />} />
        <Route path="/customer" element={<CustomerHelp />} />
        <Route path="/signin" element={<MerchantSignin />} />
        <Route path="/ridersignin" element={<MerchantSignin />} />
        <Route path="/merchant-terms" element={<TermsandConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/account" element={<UserForm />} />

        <Route path="/confirm" element={<ConfirmationPage />} />

        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/restaurants/*" element={<FoodProducts />} />
        <Route
          path="/restaurant/:restaurantId"
          element={<RestaurantDetails />}
        />

        <Route path="/pharmacies/*" element={<HealthProducts />} />
        <Route path="/pharmacy/:pharmacyId" element={<HealthDetails />} />

        <Route path="/groceries/*" element={<GroceryProducts />} />
        <Route path="/grocery/:grocerySupplyId" element={<GroceryDetails />} />

        <Route path="/households/*" element={<HouseholdProducts />} />
        <Route path="/household/:householdId" element={<HouseholdDetails />} />

        <Route path="/beautyproducts/*" element={<BeautyProducts />} />
        <Route path="/beauty/:spaId" element={<BeautyDetails />} />

        <Route path="/pets/*" element={<PetProducts />} />
        <Route path="/pet/:petSupplyId" element={<PetDetails />} />

        <Route path="/techs/*" element={<TechProducts />} />
        <Route path="/tech/:techId" element={<TechDetails />} />

        <Route path="/clothings/*" element={<ClothingProducts />} />
        <Route path="/clothing/:clothingId" element={<ClothingDetails />} />

        <Route path="/plants/*" element={<PlantProducts />} />
        <Route path="/plant/:plantSupplyId" element={<PlantDetails />} />
      </Routes>
    </div>
  );
};

export default App;
