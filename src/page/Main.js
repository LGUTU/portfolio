import Shop from "./Shop";
import Home from "./Home";
import About from "./About";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function Main(){
 return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/src/page/Shop" element={<Shop />} />
      <Route path="/src/page/About" element={<About />}/>
    </Routes>
  </BrowserRouter>
 )
}

export default Main;
