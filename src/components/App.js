import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <route path="/sign-in" element={<SignIn />} />
        <route path="/" element={<TicketControl />} />
      </Routes>
    </Router>
  );
}

export default App;