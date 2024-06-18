import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComponentWidth from "./components/comWidth";
import HomeSection from "./pages/HomeSection";
import ProizvodiComponent from "./pages/ProizvodiSection";
import LocationBar from "./components/locatonBar";
import GalerijaSection from "./pages/GalerijaSection";
import { StateProvider } from "./context/stateContext";
import PopupGalerija from "./components/PopupGalerija";
import MapContainer from "./components/Map";

function App() {

  return (
    <>
      <StateProvider>
        <div className="App" >
          <LocationBar />
          <Header />
          <ComponentWidth />
          <HomeSection />
          <ProizvodiComponent />
          <GalerijaSection />
          <MapContainer />
          <Footer />
          <PopupGalerija />
        </div>
      </StateProvider>
    </>
  );
}

export default App;
