import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Table from "./pages/Tables/Table";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Table/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;