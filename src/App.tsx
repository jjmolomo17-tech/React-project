import { BrowserRouter } from "react-router-dom";
import Student from "./components/student";

function App() {
  return (
    <div>
      <BrowserRouter>


     <Student name="John Doe" age={20} course="Computer Science" /> 
      </BrowserRouter>
    </div>
  );
}

export default App;