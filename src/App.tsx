import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TapestryOfTraditions from './components/TapestryOfTraditions';
import Categories from './components/Categories';
import WeddingLookBook from './components/WeddingLookBook';
import MenSection from './components/MenSection';
import PremiumServices from './components/PremiumServices';
import AboutContent from './components/AboutContent';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#fdf8f0] overflow-x-hidden">
      <Navbar />
      <HeroBanner />
      <TapestryOfTraditions />
      <Categories />
      <WeddingLookBook />
      <MenSection />
      <PremiumServices />
      <AboutContent />
    </div>
  );
}

export default App;
