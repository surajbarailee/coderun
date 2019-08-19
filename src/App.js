import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Body from "./Body";
import { IdProvider } from "./IdContext"
import Footer from "./Footer.js"
import NavBar from "./NavBar"
import Contact from "./Contact.js"

function App() {
  return (
    <BrowserRouter>
      <IdProvider>
        <div className="App">

          <NavBar />

          <Route exact path="/" component={Body} />
          <Route path="/Contact" component={Contact} />

          <Footer />
        </div>
      </IdProvider>
    </BrowserRouter>
  );
}

export default App;
