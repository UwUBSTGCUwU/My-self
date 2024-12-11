import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import Promotion from './Promotions/Promotion';

function App() {
  return (
    <div className="App">
      <div className="mb-5"> {/* เพิ่ม margin-bottom */}
        <Navbar />
      </div>
      <div className="mb-5"> {/* เพิ่ม margin-bottom */}
        <Carousel />
      </div>
      <div className="mb-5"> {/* เพิ่ม margin-bottom */}
        <Promotion />
      </div>
    </div>
  );
}

export default App;
