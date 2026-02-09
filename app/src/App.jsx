import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import BathroomRemodeling from './pages/services/BathroomRemodeling'
import KitchenRemodeling from './pages/services/KitchenRemodeling'
import WalkInShowers from './pages/services/WalkInShowers'
import TubToShower from './pages/services/TubToShower'
import TileStoneWork from './pages/services/TileStoneWork'
import VanityCountertops from './pages/services/VanityCountertops'
import SacramentoArea from './pages/service-areas/SacramentoArea'
import ElkGroveArea from './pages/service-areas/ElkGroveArea'
import RosevilleArea from './pages/service-areas/RosevilleArea'
import FolsomArea from './pages/service-areas/FolsomArea'
import RanchoCordovaArea from './pages/service-areas/RanchoCordovaArea'
import CitrusHeightsArea from './pages/service-areas/CitrusHeightsArea'
import RocklinArea from './pages/service-areas/RocklinArea'
import DavisArea from './pages/service-areas/DavisArea'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Service pages */}
        <Route path="/services/bathroom-remodeling" element={<BathroomRemodeling />} />
        <Route path="/services/kitchen-remodeling" element={<KitchenRemodeling />} />
        <Route path="/services/walk-in-showers" element={<WalkInShowers />} />
        <Route path="/services/tub-to-shower-conversions" element={<TubToShower />} />
        <Route path="/services/tile-stone-work" element={<TileStoneWork />} />
        <Route path="/services/vanity-countertops" element={<VanityCountertops />} />
        {/* Service area pages */}
        <Route path="/service-areas/sacramento" element={<SacramentoArea />} />
        <Route path="/service-areas/elk-grove" element={<ElkGroveArea />} />
        <Route path="/service-areas/roseville" element={<RosevilleArea />} />
        <Route path="/service-areas/folsom" element={<FolsomArea />} />
        <Route path="/service-areas/rancho-cordova" element={<RanchoCordovaArea />} />
        <Route path="/service-areas/citrus-heights" element={<CitrusHeightsArea />} />
        <Route path="/service-areas/rocklin" element={<RocklinArea />} />
        <Route path="/service-areas/davis" element={<DavisArea />} />
      </Route>
    </Routes>
  )
}

export default App
