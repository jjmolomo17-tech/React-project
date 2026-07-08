import Student from "./components/student";

function App() {
  return (
    <div>
      <h1>Student Information</h1>
      <Student name="John Doe" age={20} course="Computer Science" />
    </div>
  );
}

export default App;