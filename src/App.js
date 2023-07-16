import './App.css';
import Navbar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className=" ">
        <Navbar bgColor='red' />
        <Header title='Your Trusted Cannabis Resource' subtitle='Discover the World of Cannabis with Expert Reviews, Guides, and More!'/>
        <ItemListContainer title='Our Premium  Products' subtitle='A Wide Range of High-Quality Strains'/>
      
    </div>
  );
}

export default App;
