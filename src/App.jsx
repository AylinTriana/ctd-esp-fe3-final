
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useDentistStates } from "./Components/Context/Context";


function App() {
  const { state } = useDentistStates();
  
   return (
      <div className={state.theme === "dark" ? "dark" : "light"}>
          <Navbar/>
          <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/Contact" element={<Contact />} />
            <Route path= "/Favs" element={<Favs />} />
            <Route path= "/Detail/:id" element={<Detail />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
