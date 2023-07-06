import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import ItemListContainer from './components/itemListContainer';

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
