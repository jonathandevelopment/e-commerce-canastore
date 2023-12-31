import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Navbar bgColor="red" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  title="Your Trusted Cannabis Resource"
                  subtitle="Discover the World of Cannabis with Expert Reviews, Guides, and More!"
                />
                <ItemListContainer
                  title="Our Premium  Products"
                  subtitle="A Wide Range of High-Quality Strains"
                />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
              <Header
                  title=" Shop Our Premium Products"
                  subtitle="Discover the World of Cannabis with Expert Reviews, Guides, and More!"
                />
                <ItemListContainer
                title="Browse All Our Products"
                subtitle="A Wide Range of High-Quality Products"
              />
              </>
              
            }
          />
          <Route
            path="/about"
            element={
              <>
              <Header
                  title=" About Us"
                  subtitle="Discover the World of Cannabis with Expert Reviews, Guides, and More!"
                />
                <About/>
              </>
              
            }
          />
          <Route
            path="/contact"
            element={
              <>
              <Header
                  title=" Contact Us"
                  subtitle="Discover the World of Cannabis with Expert Reviews, Guides, and More!"
                />
                <ContactForm/>
              </>
              
            }
          />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryId"
            element={
              <div>
                <Header
                  title="Our Premium Strains"
                  subtitle="Discover the World of Cannabis with Expert Reviews, Guides, and More!"
                />
                <ItemListContainer />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <h1 className="text-3xl font-semibold text-center">
                Page Not Found
              </h1>
            }
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
