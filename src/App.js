import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import ItemListContainer from "./components/itemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Navbar bgColor="red" />
        <Routes>
        <Route
          path="/"
          element={
            <Header
              title="Your Trusted Cannabis Resource"
              subtitle="Discover the World of Cannabis with Expert Reviews, Guides, and More!"
            />
          }
        />
        </Routes>
       

        <ItemListContainer
          title="Our Premium  Products"
          subtitle="A Wide Range of High-Quality Strains"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
