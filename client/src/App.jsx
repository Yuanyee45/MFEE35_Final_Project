import React from "react";
import { Routes, Route } from "react-router-dom";

// style
import "./styles/member/body.css";
import "./styles/member/main.css";
import "./styles/member/MemberHeader.css";

import "./styles/member/footer.css";

// Route
import MemberLoginPage from "./pages/MemberLoginPage";
import MemberRegister1 from "./pages/memberRegister1";
import MemberHomePage from "./pages/user/MemberHomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LoginPage" element={<MemberLoginPage />} />
        <Route path="/MemberHomePage" element={<MemberHomePage />} />
        <Route path="/MemberRegister1" element={<MemberRegister1 />} />
      </Routes>
    </div>
  );
}

export default App;
