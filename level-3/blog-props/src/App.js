import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogList from "./BlogList";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />

      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
