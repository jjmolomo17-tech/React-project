import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
     <Route path="/about"><About/></Route>
     <Contact/>    <Route path="/contact"><Contact/></Route>
     <Home/>       <Route path="/home"><Home/></Route>
         </BrowserRouter>
    </div>
  );
}

export default App;