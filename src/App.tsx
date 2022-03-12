import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatList from "./pages/ChatList";
import ChatProfile from "./pages/ChatProfile";

import Header from "./components/Header";

function App() {
  return (
    <div className="bg-sky-50 min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path=":profile" element={<ChatProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
