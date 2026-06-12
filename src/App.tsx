import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TapestryOfTraditions from './components/TapestryOfTraditions';
import Categories from './components/Categories';
import WeddingLookBook from './components/WeddingLookBook';
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
      <AboutContent />
    </div>
  );
}

export default App;
