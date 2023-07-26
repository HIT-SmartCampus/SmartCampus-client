import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/MainHeader';
import Footer from './components/Footer';
import MainPage from './screens/MainPage';
import WaterPage from './screens/WaterPage';
import RecyclingPage from './screens/RecyclingScreen';
import MicroclimatePage from './screens/MicroclimateScreen';
import PowerPage from './screens/PowerPage';
import EcoHumanPage from './screens/EcoHumanScreen';
import Cleanliness from './screens/CleanlinessScreen';
import ContactUs from './screens/ContactPage';
import Stuff from './screens/StuffPage';
import Students from './screens/StudentsPage';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/power" element={<PowerPage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/climate" element={<MicroclimatePage />} />
        <Route path="/recycling" element={<RecyclingPage />} />
        <Route path="/ecohuman" element={<EcoHumanPage />} />
        <Route path="/cleanliness" element={<Cleanliness />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/stuff" element={<Stuff />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
