import { CssBaseline } from "@mui/material";
import AcmeInsights from "./pages/AcmeInsights";
import Commitments from "./pages/Commitments";
import Footer from "./pages/Footer";
import LandingPage from "./pages/LandingPage";
import Navbar from "./pages/Navbar";
import UpcomingEvents from "./pages/UpcomingEvents";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <LandingPage />
      <AcmeInsights />
      <Commitments />
      <UpcomingEvents />
      <Footer /> 
    </>
  );
}

export default App;
