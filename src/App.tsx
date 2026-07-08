import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/home" element={<Home/>}></Route>
         </BrowserRouter>
    </div>
  );
}

export default App;