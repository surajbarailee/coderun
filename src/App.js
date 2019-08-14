import React from 'react';
import Body from "./Body";
import Footer from "./Footer.js"
import NavBar from "./NavBar"
import { BrowserRouter, Route } from "react-router-dom"
import Contact from "./Contact.js"
import Setting from "./Setting.js"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Body} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Setting" component={Setting} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
