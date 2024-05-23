import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Earn from "./page/lightmode/Earn";

function App() {
  return (
    <div className="h-screen overflow-y-auto">
      <main className="w-full overflow-y-auto h-full">
        <Router>
          <Routes>
            <Route path="/" element={<Earn />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
