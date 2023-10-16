import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarouselC from './molecules/Carousel/CarouselC';
import Footer from './molecules/Footer/Footer';
import ModalC from './molecules/Modal/ModalC';
import HomePage from './organisms/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
