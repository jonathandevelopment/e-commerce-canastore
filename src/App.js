import './App.css';
import Navbar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


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
          <Route path='/product/' element={<ItemListContainer
                  title="Our Premium  Products"
                  subtitle="A Wide Range of High-Quality Strains"
                />} />
          <Route path='/product/:id' element={<ItemDetailContainer
                  title="Our Premium  Products"
                  subtitle="A Wide Range of High-Quality Strains"
                />} />
          <Route path='*' element={<h1 className="text-3xl font-semibold text-center">Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
