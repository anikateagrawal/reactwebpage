import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Jldi from './components/Jldi';
import Nav from './components/Nav';
import Trello from './components/Trello';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Trello/>
      <Jldi/>
      <Footer/>
    </div>
  );
}

export default App;
