import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <div className='bg-main w-full absolute h-full -z-20'></div>
        <Navbar/>
    </div>
  );
}

export default App;
