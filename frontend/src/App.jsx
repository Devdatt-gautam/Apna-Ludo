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
import GameHistory from "./pages/GameHistory";
import TransactionHistory from "./pages/TransactionHistory";
import ReferralHistory from "./pages/ReferralHistory";
import PenaltyHistory from "./pages/PenaltyHistory";
import Notification from "./pages/Notification";
import Support from "./pages/Support";
import Home from "./pages/Home.jsx";
import Battle from "./pages/Battle.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/battle" element={<Battle />} />
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
        <Route exact path="/game-history" element={<GameHistory />} />
        <Route exact path="/referral-history" element={<ReferralHistory />} />

        <Route exact path="/penalty-history" element={<PenaltyHistory />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/support" element={<Support />} />
        <Route
          exact
          path="/transaction-history"
          element={<TransactionHistory />}
        />
      </Routes>
    </div>
  );
};

export default App;
