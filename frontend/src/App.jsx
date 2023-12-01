import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Commission from "./pages/Commission";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Responsible from "./pages/Responsible";
import Rules from "./pages/Rules";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route exact path="/commision" element={<Commission />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/refund" element={<Refund />} />
        <Route exact path="/responsible" element={<Responsible />} />
        <Route exact path="/rules" element={<Rules />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
};

export default App;
